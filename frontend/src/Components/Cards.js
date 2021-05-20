import React,{useState} from "react";
import {OpenCard} from "./OpenCard";

import CSSCard from "../CSSstyles/Cards.module.css";
import {useStateValue} from "./StateProvider";


function Cards({ id, title, img, pri, rat,count,fun,total,fun1 }) {
  const[{basket},dispatch]=useStateValue();
  const[show,setShow]=useState(false);
  const togglePopup=()=>{
    console.log("yes");
    setShow(!show);
  }
  
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

  const removeProduct = ()=>{
    fetch('http://localhost:8000/api/removeProduct/'+id)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch( error => console.log("Error in deleting product:- "+error))

    
    window.location.reload(false);
  }
  return (
   
    <div id={id} className={CSSCard.card}>
      <div className={CSSCard.title}>{title}</div>
      <strong className={CSSCard.price}>Rs. {pri}</strong>
      <div className={CSSCard.rating}>{Array(rat).fill().map((_, i) => {return <p>🌟</p>})}</div>
      <img className={CSSCard.image} src={img} alt="o snap" />

      <button className={CSSCard.open} onClick={togglePopup}> Open </button>
      <button className={CSSCard.addtocart} onClick={addToCart}>Add to basket</button>
      <button className={CSSCard.remove} onClick={removeProduct}>Remove Product</button>
      

      <OpenCard title={title} onClose={()=>setShow(false)} show={show} handleClose={togglePopup}>
        <p>
          <img className={CSSCard.popimage} src={img}></img>
          <div className={CSSCard.bdy}>
          <strong className={CSSCard.price}>Rs. {pri}</strong>
          <div className={CSSCard.rating}>{Array(rat).fill().map((_, i) => {return <p>🌟</p>})}</div>
          <button className={CSSCard.addtocart} onClick={addToCart}>Add to basket</button>
          <button className={CSSCard.remove} onClick={removeProduct}>Remove Product</button>
          </div>
        </p>
      </OpenCard>
    </div>
    
  )
}

export default Cards;
