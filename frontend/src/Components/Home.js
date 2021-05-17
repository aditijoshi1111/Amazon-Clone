import React, {useState, useEffect} from "react";
import CSSHome from "../CSSstyles/Home.module.css";
import banner from "../img/banner.jpg";
import Cards from "./Cards";

function Home({count,fun,total,fun1}) {
  const [product_List, setproduct_List] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:8000/api/getAllProducts', {
      method:'GET'
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      for(let i=0;i<data.length;i++){
        var base64Flag = 'data:image/jpeg;base64,';
        var imageStr = arrayBufferToBase64(data[i].img.data.data);

        data[i].img = base64Flag + imageStr;
      }
      setproduct_List(data);
    })
    .catch(err => console.log(err))
  },[]);


  function arrayBufferToBase64(buffer){
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));

    bytes.forEach((b) => binary += String.fromCharCode(b));

    return window.btoa(binary);
  }

  return (
    <div className={CSSHome.home}>
      <div className={CSSHome.home_container}>
        <img className={CSSHome.home_image} src={banner} alt="o snap" />
        <div className={CSSHome.home_row}>
          <Cards
          id={1}
            title="You Can by George Matthew Adams | 6 August 2020"
            pri={150}
            img="https://images-na.ssl-images-amazon.com/images/I/51+R3tGEsvL._SX321_BO1,204,203,200_.jpg"
            rat={5}
            count={count}
            fun={fun}
            total={total}
            fun1={fun1}
          />
          <Cards
          id={2}
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            pri={2039}
            rat={4}
            img="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            count={count}
            fun={fun}
            total={total}
            fun1={fun1}
          />
        </div>
        <div className={CSSHome.home_row}>
          <Cards
          id={3}
            title="OnePlus 9 Pro 5G (Stellar Black, 8GB RAM, 128GB Storage)"
            pri={64999}
            img="https://images-na.ssl-images-amazon.com/images/I/71E%2BAgYDKtL._SL1500_.jpg"
            rat={4}
            count={count}
            fun={fun}
            total={total}
            fun1={fun1}
          />
          <Cards
          id={4}
            title="Safari ARC Polyester 55 cms Blue Travel Duffle (ARC55RLBLU)"
            pri={1199}
            img="https://images-na.ssl-images-amazon.com/images/I/91vQqZNMKCL._SL1500_.jpg"
            rat={3}
            count={count}
            fun={fun}
            total={total}
            fun1={fun1}
          />

          <Cards
          id={5}
            title="The Theory of Everything: The Origin and Fate of the Universe"
            pri={159}
            img="https://images-na.ssl-images-amazon.com/images/I/51oHUvYzbsL._SX327_BO1,204,203,200_.jpg"
            rat={4}
            count={count}
            fun={fun}
            total={total}
            fun1={fun1}
          />
        </div>
        <div className={CSSHome.home_row}>
          <Cards
          id={6}
            title="ASUS ZenBook Duo Intel Core i5-10210U 10th Gen 14"
            pri={89500}
            img="https://m.media-amazon.com/images/I/81K9Es2DDFL._AC_SX480_SY360_.jpg"
            rat={3}
            count={count}
            fun={fun}
            total={total}
            fun1={fun1}
          />
        </div>

        {product_List.map( item =>{
          return(
            <div> 
              <Cards
                id={item.id}
                title={item.Product_name+" - "+item.Product_description}
                img={item.img}
                pri={item.Price}
              />
            </div>
          )
        })
        }
      </div>
    </div>
  );
}

export default Home;
