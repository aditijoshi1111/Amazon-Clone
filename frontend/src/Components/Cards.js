import React from "react";
import CSSCard from "../CSSstyles/Cards.module.css";

function Cards({ id, title, img, pri, rat }) {
  return (
    <div className={CSSCard.card}>
      <div className={CSSCard.info}>
        <p>{title}</p>
        <p className={CSSCard.price}>
          <small>Rs.</small>
          <strong>{pri}</strong>
        </p>
        <div className={CSSCard.rating}>
          {Array(rat)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img className={CSSCard.image} src={img} alt="o snap" />
      <button className={CSSCard.btn}>Add to basket</button>
    </div>
  );
}

export default Cards;
