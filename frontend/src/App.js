import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SignIn from "./Components/Signin";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Checkout from "./Components/Checkout";
import ContactUs from './Components/ContactUs';

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
