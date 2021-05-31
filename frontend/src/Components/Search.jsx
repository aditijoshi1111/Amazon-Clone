import { React, useEffect, useState } from "react";
import Cards from "./Cards";
import banner from "../img/banner.jpg";
import CSSHome from "../CSSstyles/Home.module.css";
import { useHistory } from "react-router";

function Search({ products, keyword, count, fun, total, fun1 }) {
  let [prod, setProd] = useState([]);
  let history = useHistory();

  useEffect(() => {
    if (keyword == "") return;
    prod = products.filter((item) => {
      let pName = item.Product_name;
      pName = pName.toLowerCase();
      if (pName.includes(keyword)) return item;
    });
    setProd(prod);
    console.log(prod);
  }, [keyword]);

  return keyword == "" || prod.length == 0 ? (
    <div style={{ textAlign: "center", minHeight: "440px" }}>
      <h1>No Products Found</h1>
      <button
        style={{
          backgroundColor: "#f0c14b",
          marginTop: "10px",
          borderColor: " #a88734 #9c7e31 #845a29",
          padding: "10px",
          width: "30%",
          color: "white",
        }}
        onClick={() => {
          history.push("/");
        }}
      >
        Go Back To Home
      </button>
    </div>
  ) : (
    <div className={CSSHome.home}>
      <div className={CSSHome.home_container}>
        <img
          className={CSSHome.home_image}
          src={banner}
          style={{ height: "35%" }}
          alt="o snap"
        />
        <div className={CSSHome.home_row1}>
          {prod.map((item) => {
            return (
              <Cards
                key={item._id}
                id={item._id}
                title={item.Product_name + " - " + item.Product_description}
                img={item.img}
                pri={item.Price}
                fun={fun}
                total={total}
                count={count}
                fun1={fun1}
                rat={5}
              />
            );
          })}
        </div>
        <button
          style={{
            backgroundColor: "#f0c14b",
            marginTop: "10px",
            borderColor: " #a88734 #9c7e31 #845a29",
            padding: "10px",
            width: "25%",
            color: "white",
            position: "absolute",
            left: "38%",
          }}
          onClick={() => {
            history.push("/");
          }}
        >
          Go Back To Home
        </button>
      </div>
    </div>
  );
}

export default Search;
//setpro([...prod,{c:1,d:2}]);
