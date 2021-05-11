import React from "react";
import CSSHome from "../CSSstyles/Home.module.css";
import banner from "../img/banner.jpg";
import Cards from "./Cards";

function Home() {
  return (
    <div className={CSSHome.home}>
      <div className={CSSHome.home_container}>
        <img className={CSSHome.home_image} src={banner} alt="o snap" />
        <div className={CSSHome.home_row}>
          <Cards />
          <Cards />
        </div>
        <div className={CSSHome.home_row}>
          <Cards />
          <Cards />
          <Cards />
        </div>
        <div className={CSSHome.home_row}>
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default Home;
