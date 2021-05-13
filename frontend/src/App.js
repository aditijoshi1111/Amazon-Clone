import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SignIn from "./Components/Signin";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Checkout from "./Components/Checkout";
<<<<<<< HEAD
import Aboutus from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
=======
import ContactUs from './Components/ContactUs';
//import {MyCard} from './Components/MyCard';
>>>>>>> 8f07ba9607f5e2e6299e51e60c3d2ca2dde1cfd5

function App() {
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
            <ContactUs />
          </Route>
          <Route path="/cart">
            <Checkout />
          </Route>

          <Route path="/aboutus">
            <Aboutus />
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
