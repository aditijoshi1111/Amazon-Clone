import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import React, { useState } from 'react';
import "./Box.css";
import { Card } from "react-bootstrap";
import SignIn from "./Components/Signin";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Checkout from "./Components/Checkout";
import ContactUs from './Components/ContactUs';
import {MyCard} from './Components/MyCard';

function App() {
  const cardInfo=[
    {
            title:"You Can by George Matthew Adams | 6 August 2020",
            pri:150,
            img:"https://images-na.ssl-images-amazon.com/images/I/51+R3tGEsvL._SX321_BO1,204,203,200_.jpg",
            rat=5,
    },
    {
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",
            pri=2039,
            rat=4,
            img="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg",
    },
    {
      title="OnePlus 9 Pro 5G (Stellar Black, 8GB RAM, 128GB Storage)",
      pri=64999,
      img="https://images-na.ssl-images-amazon.com/images/I/71E%2BAgYDKtL._SL1500_.jpg",
      rat=4,
    },
    {
            title="Safari ARC Polyester 55 cms Blue Travel Duffle (ARC55RLBLU)",
            pri=1199,
            img="https://images-na.ssl-images-amazon.com/images/I/91vQqZNMKCL._SL1500_.jpg",
            rat=3,
    },
    {
      title="The Theory of Everything: The Origin and Fate of the Universe",
      pri=159,
      img="https://images-na.ssl-images-amazon.com/images/I/51oHUvYzbsL._SX327_BO1,204,203,200_.jpg",
      rat=4,
    },
    {
            title="ASUS ZenBook Duo Intel Core i5-10210U 10th Gen 14",
            pri=89500,
            img="https://m.media-amazon.com/images/I/81K9Es2DDFL._AC_SX480_SY360_.jpg",
            rat=3,
    },
  ];
  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index} className="box">
        <Card.Img variant="top" src="holder.js/100px180" src={card.img} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.pri}</Card.Text>
        </Card.Body>
      </Card>
    );
  };
  const addToCart=()=>
  {
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
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signIn">
            <SignIn />
          </Route>

          <Route path="/contactUs">
            <ContactUs/>
          </Route>
          <Route path="/cart">
            <Checkout/>
          </Route>
          <div className="grid">{cardInfo.map(renderCard)}</div>
         {/* <Route path="/add">
            <MyCard card={cardinfo} func={addToCart}/>
  </Route>*/}
        </Switch>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
