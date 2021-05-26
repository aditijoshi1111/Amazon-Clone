import React, { useState } from "react";
import { OpenCard } from "./OpenCard";

import CSSCard from "../CSSstyles/Cards.module.css";
import { useStateValue } from "./StateProvider";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addInCart, getOrders, getOrderById, updateOrder } from "../apis/order";
import { isAutheticated, updateUserPurshase } from "../apis/auth";

function Cards({ id, title, img, pri, rat, count, fun, total, fun1 }) {
  const [{ basket }, dispatch] = useStateValue();
  const [show, setShow] = useState(false);
  const togglePopup = () => {
    console.log("yes");
    setShow(!show);
  };
  const addToCart = async (prodId) => {
    // fun1(total + pri);

    let alreadyAdded = await getOrders();
    if (alreadyAdded.data.length === 0) {
      let orderAdded = await addInCart(prodId, {
        count: 1,
      });
      toast("Added in Cart", {
        type: "warning",
      });
      fun(count + 1);
    } else {
      let newList = alreadyAdded.data.filter((item) => {
        return item.product !== prodId;
      });
      // console.log(newList);
      for (let i = 0; i < alreadyAdded.data.length; i++) {
        let obj = alreadyAdded.data[i];
        let order = await getOrderById(obj._id);
        if (obj.product === prodId) {
          let count = order.data.count;
          let updatedObj = await updateOrder(obj._id, {
            count: count + 1,
          });
          //console.log(updatedObj.data);
          newList.push(updatedObj.data);
          let user = await updateUserPurshase({ purchases: newList });
          //console.log(user);
          toast("Quantity increased in Cart", {
            type: "info",
          });
          dispatch({
            type: "Update",
            id: updatedObj.data.product,
            order: {
              id: id,
              title: title,
              img: img,
              pri: pri,
              rat: rat,
              count: count + 1,
            },
          });
          return;
        }
      }
      let orderAdded = await addInCart(prodId, {
        count: 1,
      });
      fun(count + 1);
      toast("Added in Cart", {
        type: "warning",
      });
    }

    dispatch({
      type: "Add_to_basket",
      item: {
        id: id,
        title: title,
        img: img,
        pri: pri,
        rat: rat,
        count: 1,
      },
    });
  };

  const removeProduct = () => {
    fetch("http://localhost:8000/api/removeProduct/" + id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log("Error in deleting product:- " + error));

    window.location.reload(false);
  };
  return (
    <div id={id} className={CSSCard.card}>
      <div className={CSSCard.title}>{title}</div>
      <strong className={CSSCard.price}>Rs. {pri}</strong>
      <div className={CSSCard.rating}>
        {Array(rat)
          .fill()
          .map((_, i) => {
            return <p key={i}>🌟</p>;
          })}
      </div>
      <img className={CSSCard.image} src={img} alt="o snap" />

      <button className={CSSCard.open} onClick={togglePopup}>
        {" "}
        Open{" "}
      </button>

      {isAutheticated() ? (
        <button className={CSSCard.addtocart} onClick={() => addToCart(id)}>
          Add to basket
        </button>
      ) : (
        ""
      )}
      {isAutheticated() ? (
        <button className={CSSCard.remove} onClick={removeProduct}>
          Remove Product
        </button>
      ) : (
        ""
      )}

      <OpenCard
        title={title}
        onClose={() => setShow(false)}
        show={show}
        handleClose={togglePopup}
      >
        <p>
          <img className={CSSCard.popimage} src={img}></img>
          <div className={CSSCard.bdy}>
            <strong className={CSSCard.price}>Rs. {pri}</strong>
            <div className={CSSCard.rating}>
              {Array(rat)
                .fill()
                .map((_, i) => {
                  return <p key={i}>🌟</p>;
                })}
            </div>
            {isAutheticated() ? (
              <button className={CSSCard.addtocart} onClick={addToCart}>
                Add to basket
              </button>
            ) : (
              ""
            )}
            {isAutheticated() ? (
              <button className={CSSCard.remove} onClick={removeProduct}>
                Remove Product
              </button>
            ) : (
              ""
            )}
          </div>
        </p>
      </OpenCard>
      <ToastContainer />
    </div>
  );
}

export default Cards;
