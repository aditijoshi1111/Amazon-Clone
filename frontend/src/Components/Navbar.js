import React  from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import CSSNav from "../CSSstyles/Navbar.module.css";
import logo from "../img/logo.png";


class Navbar extends React.Component {
   
  render() {
    return (
      <div className={CSSNav.container}>
        <Link to="/">
          <img className={CSSNav.logo} src={logo} alt="qwerty" />
        </Link>

        <div className={CSSNav.search}>
          <input type="text" />
          <SearchIcon className={CSSNav.search_icon} />
        </div>

        <Link to="/signIn">
          <div>
            <span>Hello Guest</span>
            <br />
            Sign In
          </div>
        </Link>

        <Link to="/returnOrders">
          <div>
            <span>Returns</span>
            <br /> Orders
          </div>
        </Link>

        <Link to="/prime">
          <div>
            <span>Your</span>
            <br/>
            Prime
          </div>
        </Link>

        <Link to="/cart">
          <div>
            <ShoppingCartIcon />{this.props.count}
          </div>
        </Link>
      </div>
    );
  }
}

export default Navbar;

