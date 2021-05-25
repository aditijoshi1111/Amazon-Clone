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

function App() {
  const [counter, setCount] = useState(0);
  const [price, setTotal] = useState(0);
  const [name, setName] = useState("Guest");
  useEffect(() => {
    if (isAutheticated()) setName(isAutheticated().user.name);
  }, []);

  
  // console.log(name)
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar count={counter} name={name} setName={setName} />
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
            <SignIn setName={setName} />
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
