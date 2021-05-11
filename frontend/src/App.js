import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './Components/Navbar';
import SignIn from './Components/Signin';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
    <Navbar/>

      <Switch>
        <Route exact path="/">
        </Route>
       
        <Route path="/signIn">
          <SignIn/>
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
