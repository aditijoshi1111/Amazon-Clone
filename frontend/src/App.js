import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
  );
}

export default App;
