import React from "react";
import CSSCard from "../CSSstyles/Cards.module.css";

function Cards() {
  return (
    <div className={CSSCard.card}>
      <div className={CSSCard.info}>
        <p>You Can by George Matthew Adams | 6 August 2020</p>
        <p className={CSSCard.price}>
          <small>Rs.</small>
          <strong>150</strong>
        </p>
        <div className={CSSCard.rating}>
          <p>*</p>
          <p>*</p>
        </div>
      </div>
      <img
        className={CSSCard.image}
        src="https://images-na.ssl-images-amazon.com/images/I/51+R3tGEsvL._SX321_BO1,204,203,200_.jpg"
        alt="o snap"
      />
      <button className={CSSCard.btn}>Add to basket</button>
    </div>
  );
}

export default Cards;
