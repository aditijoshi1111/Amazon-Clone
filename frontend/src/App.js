import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SignIn from "./Components/Signin";
import Home from "./Components/Home";
<<<<<<< HEAD
import ContactUs from "./Components/ContactUs";
=======
import Footer from "./Components/Footer";
import Checkout from "./Components/Checkout";
>>>>>>> df36e580602cdf1e87a1c8e6b91eb30e581bd851

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
<<<<<<< HEAD
          <Route path="/ContactUs">
            <ContactUs />
          </Route>
=======
          
          <Route path="/cart">
            <Checkout/>
          </Route>
          
>>>>>>> df36e580602cdf1e87a1c8e6b91eb30e581bd851
        </Switch>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

