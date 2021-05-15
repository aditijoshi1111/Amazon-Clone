
import React from 'react';
import CheckCSS from '../CSSstyles/Checkout.module.css'
import amazonAd from '../img/amazonAd3.jpg'
import Subtotal from "./Subtotal";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
function Checkout({count,fun}) {
    const[{basket},dispatch]=useStateValue();
 return(
     
        
    <div className = {CheckCSS.checkout}>
       <div className={CheckCSS.checkout__left}>
       <img className = {CheckCSS.checkoutAd} src = {amazonAd} alt ="Something went wrong" />
       <div>
       <h2 className={CheckCSS.checkout_title}>Your shopping Basket</h2>
       {
           basket.map(item=>{
           return <CheckoutProduct
            id={item.id}
            title={item.title}
            pri={item.pri}
            img={item.img}
            rat={item.rat}
            count={count}
            fun={fun}
          />
           })
         }
        </div>

         <div className={CheckCSS.checkout__right}>
            <Subtotal />
           <h2 className={CheckCSS.subtext}>The subtotal will go here</h2>
            </div>
     </div>
     <hr/>
    </div>
 )
}
export default Checkout;