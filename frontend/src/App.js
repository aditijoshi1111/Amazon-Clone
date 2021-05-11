import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './Components/Navbar';
import { Signin } from './Components/Signin';

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
  );
}

export default App;
