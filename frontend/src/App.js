import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SignIn from "./Components/Signin";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Checkout from "./Components/Checkout";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import MyCard from "./Components/MyCard";
import SignUp from "./Components/Signup";
import { isAutheticated } from "./apis/auth";
import { getOrders } from "./apis/order";
import { useStateValue } from "./Components/StateProvider";
import { getProdById } from "./apis/product";

function App() {
  const [counter, setCount] = useState(0);
  const [price, setTotal] = useState(0);
  const [check, setCheck] = useState(false);
  const [name, setName] = useState("Guest");
  const [{ basket }, dispatch] = useStateValue();
  function arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));

    bytes.forEach((b) => (binary += String.fromCharCode(b)));

    return window.btoa(binary);
  }

  useEffect(() => {
    if (isAutheticated().user) setName(isAutheticated().user.name);
    // console.log("length", basket.length, check);
    console.log(basket);
    if (isAutheticated() && check == false) {
      setCheck(true);
      const getProd = async (id, count, oId) => {
        const { data } = await getProdById(id);
        let base64Flag = "data:image/jpeg;base64,";
        let imageStr = arrayBufferToBase64(data.img.data.data);
        let image = base64Flag + imageStr;
        dispatch({
          type: "Add_to_basket",
          item: {
            id: id,
            oId: oId,
            title: data.Product_name,
            img: image,
            pri: data.Price,
            count: count,
            rat: 5,
          },
        });
      };
      let orderGet = async () => {
        //console.log("ADDING");
        const { data } = await getOrders();
        console.log(data);
        //console.log(data)
        if (data.length) {
          for (let i = 0; i < data.length; i++) {
            let obj = data[i];
            console.log(obj);
            let id = obj.product;
            let oId = obj._id;
            console.log(oId);
            getProd(id, obj.count, oId);
          }
        }
      };
      orderGet();
    }
    // console.log(ordersInCart);
  }, [name]);

  // console.log(name)
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar
          count={counter}
          name={name}
          setName={setName}
          setCount={setCount}
          dispatch={dispatch}
          setCheck={setCheck}
        />
        <Switch>
          <Route exact path="/">
            <Home
              count={counter}
              fun={setCount}
              total={price}
              fun1={setTotal}
            />
          </Route>

          <Route path="/signIn">
            <SignIn setName={setName} setCount={setCount} />
          </Route>

          <Route path="/signUp">
            <SignUp />
          </Route>

          <Route path="/addProduct">
            <MyCard />
          </Route>

          <Route path="/cart">
            <Checkout
              count={counter}
              fun={setCount}
              total={price}
              fun1={setTotal}
            />
          </Route>

          <Route path="/aboutUs">
            <AboutUs />
          </Route>

          <Route path="/contactUs">
            <ContactUs />
          </Route>
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
