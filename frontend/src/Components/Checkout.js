import React from "react";
import CheckCSS from "../CSSstyles/Checkout.module.css";
import amazonAd from "../img/amazonAd3.jpg";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
function Checkout({ count, fun, total, fun1 }) {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className={CheckCSS.checkout}>
      <div className={CheckCSS.checkout__left}>
        <img
          className={CheckCSS.checkoutAd}
          src={amazonAd}
          alt="Something went wrong"
        />
        <div>
          <h2 className={CheckCSS.checkout_title}>Your shopping Basket</h2>
          {basket.map((item) => {
            return (
              <CheckoutProduct
                key={item._id}
                id={item._id}
                title={item.title}
                pri={item.pri}
                img={item.img}
                rat={item.rat}
                count={count}
                fun={fun}
                total={total}
                fun1={fun1}
              />
            );
          })}
        </div>

        <div className={CheckCSS.checkout__right}>
          <Subtotal count={count} total={total} />
          <h2 className={CheckCSS.subtext}>The subtotal will go here</h2>
        </div>
      </div>
      <hr />
    </div>
  );
}
export default Checkout;
