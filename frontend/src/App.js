import "./App.css";
import React,{useState} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SignIn from "./Components/Signin";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Checkout from "./Components/Checkout";
import ContactUs from './Components/ContactUs';
import {MyCard} from './Components/MyCard';

function App() {
  const [counter,setCount]=useState(0);
  const [price,setTotal]=useState(0);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar count={counter} />

        <Switch>
          <Route exact path="/">
            <Home count={counter} fun={setCount} total={price} fun1={setTotal} />
          </Route>
          <Route path="/signIn">
            <SignIn />
          </Route>

          <Route path="/contactUs">
            <ContactUs/>
          </Route>
          <Route path="/cart">
            <Checkout count={counter} fun={setCount} total={price} fun1={setTotal}/>
          </Route>
          <Route path="/add">
            <MyCard/>
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
