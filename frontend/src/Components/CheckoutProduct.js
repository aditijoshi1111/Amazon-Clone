import React from "react";
import CSSCard from "../CSSstyles/Cards.module.css";
import CSScheck from "../CSSstyles/CheckoutProduct.module.css";
import { useStateValue } from "./StateProvider.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getOrders, deleteOrder } from "../apis/order";
import { updateUserPurshase } from "../apis/auth";

export default function CheckoutProduct({
  id,
  title,
  img,
  pri,
  rat,
  count,
  fun,
  total,
  fun1,
  quan,
  oId,
}) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromCart = async (prodId) => {
    let order = {};
    //console.log(prodId);
    let { data } = await getOrders();
    //console.log(data);
    let allOrders = data.filter((item) => {
      if (item.product === prodId) order = item;
      return item.product !== prodId;
    });
    let oId = order._id;
    let countItems = order.count;
    //console.log(allOrders);
    if (countItems > 1) {
      let updatedOrder = await deleteOrder(oId);
      //console.log(updatedOrder.data);
      allOrders.push(updatedOrder.data);
      let user = await updateUserPurshase({ purchases: allOrders });
      //console.log(user.data.purchases);
      // //updatedOrder.data
      dispatch({
        type: "Update",
        id: prodId,
        order: {
          id: prodId,
          oId: oId,
          title: title,
          img: img,
          pri: pri,
          rat: rat,
          count: countItems - 1,
        },
      });
      toast("Quantity Decreased in Cart", {
        type: "info",
      });
    } else if (countItems === 1) {
      let deletedOrder = await deleteOrder(oId);
      //console.log("ORDER", deletedOrder);
      let user = await updateUserPurshase({ purchases: allOrders });
      dispatch({
        type: "Remove_from_basket",
        id: prodId,
      });
      //console.log(user.data.purchases);
      fun(count - 1);
      toast("Removed item in Cart", {
        type: "error",
      });
    } else {
      toast("First add item", {
        type: "error",
      });
    }
  };
  return (
    <div className={CSScheck.product}>
      <img className={CSScheck.image} src={img} alt={"NAN"}></img>
      <div className={CSScheck.info}>
        <p>{title}</p>
        <p className={CSSCard.price}>
          <small>Rs.</small>
          <strong>{pri}</strong>
        </p>
        <strong>Quantity {quan}</strong>
        <div className={CSSCard.rating}>
          {Array(rat)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <button className={CSScheck.btn} onClick={() => removeFromCart(id)}>
          Remove from basket
        </button>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />
    </div>
  );
}
