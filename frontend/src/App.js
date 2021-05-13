import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SignIn from "./Components/Signin";
import Home from "./Components/Home";
<<<<<<< HEAD
import Footer from "./Components/Footer"
import { MyCard } from "./Components/MyCard";
=======
import Footer from "./Components/Footer";
import Checkout from "./Components/Checkout";
import ContactUs from './Components/ContactUs';
>>>>>>> dcd24ac2814500f55c26f4575bf64d61cb71b17b

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <MyCard/>
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
            <Checkout />
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
