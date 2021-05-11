import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SignIn from "./Components/Signin";
import Home from "./Components/Home";
import Footer from "./Components/Footer"
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
        </Switch>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
