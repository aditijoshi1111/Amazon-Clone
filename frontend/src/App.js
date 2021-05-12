import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SignIn from "./Components/Signin";
import Home from "./Components/Home";
import ContactUs from "./Components/ContactUs";

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
          <Route path="/ContactUs">
            <ContactUs />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
