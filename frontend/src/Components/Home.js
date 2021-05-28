import React, { useState, useEffect } from "react";
import CSSHome from "../CSSstyles/Home.module.css";
import banner from "../img/banner.jpg";
import Cards from "./Cards";
import ReactLoading from "react-loading";

function Home({ count, fun, total, fun1 }) {
  const [product_List, setproduct_List] = useState([]);
  let [loading, setLoading] = useState(true);
  let color = "#f0c14b";

  useEffect(() => {
    fetch("/getAllProducts", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        for (let i = 0; i < data.length; i++) {
          var base64Flag = "data:image/jpeg;base64,";
          var imageStr = arrayBufferToBase64(data[i].img.data.data);

          data[i].img = base64Flag + imageStr;
        }
        setproduct_List(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  function arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));

    bytes.forEach((b) => (binary += String.fromCharCode(b)));

    return window.btoa(binary);
  }

  return loading ? (
    <div
      style={{
        width: "100%",
        height: "465px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ReactLoading
        type={"cylon"}
        color={color}
        height={"465px"}
        width={"423px"}
      />
      <div style={{ color: color, fontSize: "50px" }}>Loading ...</div>
    </div>
  ) : (
    <div className={CSSHome.home}>
      <div className={CSSHome.home_container}>
        <img className={CSSHome.home_image} src={banner} alt="o snap" />
        <div className={CSSHome.home_row1}>
          {product_List.map((item) => {
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
      </div>
    </div>
  );
}

export default Home;
