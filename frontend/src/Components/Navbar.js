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
          <div  className={CSSNav.logo}>
            <Link to="/">
              <img src={logo} alt="qwerty" />
            </Link>
          </div>

          <div className={CSSNav.list_container}>

              <input type="checkbox" className={CSSNav.toggler} id="check" />
              <label htmlFor="check" className={CSSNav.hamburger}>
                  <div></div>
                  <div></div>
                  <div></div>
              </label>

              <label htmlFor="check" className={CSSNav.cross}>
                &times;
              </label>
            
              <form className={CSSNav.search}>
                  <input type="text" />
                  <SearchIcon className={CSSNav.search_icon} />
              </form>

              <ul>
                <li>
                  <form className={CSSNav.search_pseudo}>
                    <input type="text" />
                    <SearchIcon className={CSSNav.search_icon} />
                  </form>
                </li>
                <li>
                  <Link to="/signIn">
                    <div>
                      <span>Hello Guest</span>
                      <br />
                      Sign In
                    </div>
                  </Link>
                </li>

                <li>
                  <Link to="/returnOrders">
                    <div>
                      <span>Returns</span>
                      <br /> Orders
                    </div>
                  </Link>
                </li>

                <li>
                  <Link to="/addProduct">
                    <div>
                      <span>Add</span>
                      <br/>
                      Product
                    </div>
                  </Link>
                </li>

                <li>
                  <Link to="/cart">
                    <div>
                      <ShoppingCartIcon />{this.props.count}
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
      </div>
    );
  }
}

export default Navbar;

