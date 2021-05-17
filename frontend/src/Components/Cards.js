import React from "react";

import CSSCard from "../CSSstyles/Cards.module.css";
import {useStateValue} from "./StateProvider";


function Cards({ id, title, img, pri, rat,count,fun,total,fun1 }) {
  const[{basket},dispatch]=useStateValue();
  
 const addToCart=()=>
  {
    fun(count+1);
    fun1(total+pri);
    
    dispatch(
      {
        type:"Add_to_basket",
        item:{
          id:id,
          title:title,
          img:img,
          pri:pri,
          rat:rat,
        }
      }
    )
  }
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
      <button className={CSSCard.btn} onClick={addToCart}>Add to basket</button>
    </div>
  )
}

export default Cards;
