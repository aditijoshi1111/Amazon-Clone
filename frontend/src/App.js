import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <>
  <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact to="/">
          <Navbar></Navbar>
        </Route>

      </Switch>
      <Footer></Footer>
      
    </div>
  </BrowserRouter>
  
  
  
  </>
=======
import Navbar from "./Components/Navbar";
import SignIn from "./Components/Signin";
import Home from "./Components/Home";

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
      </div>
    </BrowserRouter>
>>>>>>> db532f3016045272175d4f07e35ffd98194646a3
  );
}

export default App;
