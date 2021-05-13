import React from 'react';
import CSSCard from "../CSSstyles/Cards.module.css";
import CSScheck from "../CSSstyles/CheckoutProduct.module.css"
import {useStateValue} from "./StateProvider.js";

export default function CheckoutProduct({id,title,img,pri,rat}) {
    const [{basket},dispatch]=useStateValue();
    const removeFromBasket=()=>{
        dispatch({
            type:"Remove_from_basket",
            id:id,
        })
    }
    return (
        <div className={CSScheck.product}>
            <img className={CSScheck.image} src={img}>    
            </img>
            <div className={CSScheck.info}>
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
        <button className={CSScheck.btn}  onClick={removeFromBasket}>Remove from basket</button>
            </div>
            
        </div>

    )
}
