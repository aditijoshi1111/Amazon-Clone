import React from 'react';
import {Link} from 'react-router-dom'
import SearchIcon from  '@material-ui/icons/Search';
import CSSNav from '../CSSstyles/Navbar.module.css';
import logo from '../img/logo.png'

class Navbar extends React.Component{
    render(){
        return(
            <div className={CSSNav.container}>
                <Link to="/Home">
                <img
                className={CSSNav.logo} 
                src={logo} 
                alt="qwerty"/>
                </Link>
                <div className={CSSNav.search}>
                <input type="text"/>
                <SearchIcon className={CSSNav.search_icon}/>
                </div>
                <div>
                    Hello Guest
                    <div>Sign In</div>
                </div>
                <div>
                    Returns
                    <div>& Orders</div>
                </div>
                <div>
                    Your
                    <div>Prime</div>
                </div>
                <div>
                    {/* <Cart/> */}
                    <div></div>
                </div>
            </div>
        )
    }
}

export default Navbar;