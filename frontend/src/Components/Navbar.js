import React from "react";
import { Link, withRouter } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import CSSNav from "../CSSstyles/Navbar.module.css";
import logo from "../img/logo.png";
import { isAutheticated, signout } from "../apis/auth";
import { getOrders } from "../apis/order";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
    };
  }
  async componentDidMount() {
    let alreadyAdded = await getOrders();
    this.props.setCount(alreadyAdded.data.length);
  }
  componentWillReceiveProps(nextProps) {
    //console.log(nextProps.name);
    if (this.props.name !== nextProps.name) {
      this.setState({ name: nextProps.name });
    }
  }
  // componentDidUpdate(prevProps){
  //   if(prevProps.name!== this.props.name)
  //     this.setState({ name: this.props.name });

  // }

  render() {
    return (
      <div className={CSSNav.container}>
        <div className={CSSNav.logo}>
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
              {!isAutheticated() ? (
                <Link to="/signIn">
                  <div>
                    <span>Hello {this.state.name}</span>
                    <br />
                    Sign In
                  </div>
                </Link>
              ) : (
                <Link
                  onClick={() =>
                    signout(() => {
                      this.props.history.push("/signIn");
                      this.props.setName("Guest");
                    })
                  }
                >
                  <div>
                    <span>Hello {this.state.name}</span>
                    <br />
                    Sign Out
                  </div>
                </Link>
              )}
            </li>

            <li>
              <Link to="/returnOrders">
                <div>
                  <span>Returns</span>
                  <br /> Orders
                </div>
              </Link>
            </li>
            {isAutheticated() ? (
              <li>
                <Link to="/addProduct">
                  <div>
                    <span>Add</span>
                    <br />
                    Product
                  </div>
                </Link>
              </li>
            ) : (
              <Link to="/signUp">
                <div>
                  <span>Create Account</span>
                  <br />
                  Sign Up
                </div>
              </Link>
            )}

            <li>
              <Link to="/cart">
                <div>
                  <ShoppingCartIcon />
                  {this.props.count}
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);
