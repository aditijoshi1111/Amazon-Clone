import React, { useEffect, useState } from "react";
import CheckCSS from "../CSSstyles/Checkout.module.css";
import amazonAd from "../img/amazonAd3.jpg";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import ReactLoading from "react-loading";
let color = "#f0c14b";
function Checkout({ count, fun, total, fun1 }) {
  const [{ basket }, dispatch] = useStateValue();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let sum = 0;
    console.log(basket);
    for (let i = 0; i < basket.length; i++)
      sum += parseInt(basket[i].pri) * basket[i].count;
    setLoading(false);

    fun1(sum + "");
  }, [basket]);
  return loading ? (
    <div
      style={{
        width: "100%",
        height: "465px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ReactLoading
        type={"bars"}
        color={color}
        height={"465px"}
        width={"423px"}
      />
      <div style={{ color: color, fontSize: "50px" }}>Orders Updating ...</div>
    </div>
  ) : (
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
                quan={item.count}
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
