import "./App.css";
<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> 10843e9db8934034b50d44bff111d473be8990fe
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SignIn from "./Components/Signin";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Checkout from "./Components/Checkout";
import AboutUs from './Components/AboutUs'
import ContactUs from "./Components/ContactUs";
<<<<<<< HEAD
import AboutUs from "./Components/AboutUs";
//import {MyCard} from './Components/MyCard';
//import ContactUs from './Components/ContactUs';
import MyCard from "./Components/MyCard";
=======
import MyCard from "./Components/MyCard";
import SignUp from "./Components/Signup";
import { isAutheticated } from "./apis/auth";
>>>>>>> 10843e9db8934034b50d44bff111d473be8990fe

function App() {
  const [counter, setCount] = useState(0);
  const [price, setTotal] = useState(0);
<<<<<<< HEAD
=======
  const [name, setName] = useState("Guest");
  useEffect(() => {
    if (isAutheticated()) setName(isAutheticated().user.name);
  }, []);

  // console.log(name)
>>>>>>> 10843e9db8934034b50d44bff111d473be8990fe
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
<<<<<<< HEAD
          </Route>
          <Route path="/add">
            <MyCard />
          </Route>

          <Route path="/aboutus">
            <AboutUs />
=======
>>>>>>> 10843e9db8934034b50d44bff111d473be8990fe
          </Route>
          
          <Route path="/aboutUs">
            <AboutUs />
          </Route>
          
          <Route path="/contactUs">
            <ContactUs />
          </Route>

        </Switch>

        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
