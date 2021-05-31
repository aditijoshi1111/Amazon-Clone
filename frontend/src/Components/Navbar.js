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
<<<<<<< HEAD
      //keywords:"",
=======
      keyword: this.props.keyword,
>>>>>>> a0d707cf9f5df2c92e006fe85c82c95f90f93f13
    };
  }
  async componentDidMount() {
    let alreadyAdded = await getOrders();
    if (alreadyAdded.data) this.props.setCount(alreadyAdded.data.length);
  }
  componentWillReceiveProps(nextProps) {
    //console.log(nextProps.name);
    if (this.props.name !== nextProps.name) {
      this.setState({ name: nextProps.name });
    }
    // if (this.props.keyword !== nextProps.keyword) {
    //   this.setState({ keyword: nextProps.keyword });
    // }
  }
  // componentDidUpdate(prevProps){
  //   if(prevProps.name!== this.props.name)
  //     this.setState({ name: this.props.name });

  // }
<<<<<<< HEAD
/*getValue = (e) =>{
  this.setState({
    keywords:e.target.value
  })
}
handleSearch =()=>{
  fetch("http://localhost:8000/api/getAllProducts", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
    console.log(data);
  var arr= data.filter(item =>
    {
      return item.Product_Name.isMatch(this.keywords);
    });
   // <searchKey arr={data}/>
    
     
    })
    .catch((err) => console.log(err));
}*/
=======
  handleChange = (event) => {
    this.setState({ keyword: event.target.value });
  };
  submit = () => {
    let value = this.state.keyword;
    console.log(value)
    if (value == undefined) value = "";
    value = value.toLowerCase();
    this.props.setKeyword(value);
    this.setState({ keyword: "" });
    this.props.history.push("/search");
  };

>>>>>>> a0d707cf9f5df2c92e006fe85c82c95f90f93f13
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
            <input
              type="text"
              value={this.state.keyword}
              onChange={this.handleChange}
            />
            <SearchIcon
              className={CSSNav.search_icon}
              onClick={() => this.submit()}
            />
          </form>

          <ul>
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
                      this.props.setCount(0);
                      this.props.setCheck(false);
                      let { dispatch } = this.props;
                      dispatch({
                        type: "Clear_Basket",
                      });
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
            {isAutheticated() ? (
              <li>
                <Link to="/cart">
                  <div>
                    <ShoppingCartIcon />
                    {this.props.count}
                  </div>
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/signIn">
                  <div>
                    <ShoppingCartIcon />
                    {this.props.count}
                  </div>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);
