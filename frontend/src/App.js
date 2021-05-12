import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SignIn from "./Components/Signin";
import Home from "./Components/Home";
<<<<<<< HEAD


function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact to="/">
         
          <Navbar></Navbar>
          
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
=======
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
>>>>>>> 4980c0b83beb5da6bb7362a7e142a33a513c3844
  );
}

export default App;
