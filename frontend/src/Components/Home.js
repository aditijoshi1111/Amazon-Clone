import React from "react";
import CSSHome from "../CSSstyles/Home.module.css";
import banner from "../img/banner.jpg";
import Cards from "./Cards";
//import {Mycard} from "./MyCard";

function Home() {
  return (
    <div className={CSSHome.home}>
      <div className={CSSHome.home_container}>
        <img className={CSSHome.home_image} src={banner} alt="o snap" />
        <div className={CSSHome.home_row}>       
          <Cards
            title="You Can by George Matthew Adams | 6 August 2020"
            pri={150}
            img="https://images-na.ssl-images-amazon.com/images/I/51+R3tGEsvL._SX321_BO1,204,203,200_.jpg"
            rat={5}
          />
          <Cards
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            pri={2039}
            rat={4}
            img="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>
        <div className={CSSHome.home_row}>
          <Cards
            title="OnePlus 9 Pro 5G (Stellar Black, 8GB RAM, 128GB Storage)"
            pri={64999}
            img="https://images-na.ssl-images-amazon.com/images/I/71E%2BAgYDKtL._SL1500_.jpg"
            rat={4}
          />
          <Cards
            title="Safari ARC Polyester 55 cms Blue Travel Duffle (ARC55RLBLU)"
            pri={1199}
            img="https://images-na.ssl-images-amazon.com/images/I/91vQqZNMKCL._SL1500_.jpg"
            rat={3}
          />

          <Cards
            title="The Theory of Everything: The Origin and Fate of the Universe"
            pri={159}
            img="https://images-na.ssl-images-amazon.com/images/I/51oHUvYzbsL._SX327_BO1,204,203,200_.jpg"
            rat={4}
          />
        </div>
        <div className={CSSHome.home_row}>
          <Cards
            title="ASUS ZenBook Duo Intel Core i5-10210U 10th Gen 14"
            pri={89500}
            img="https://m.media-amazon.com/images/I/81K9Es2DDFL._AC_SX480_SY360_.jpg"
            rat={3}
          />
        </div>
        <button type="submit" >Create your Product</button> 
      </div>
    </div>
  );
}

export default Home;
