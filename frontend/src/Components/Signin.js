import React from 'react'
import {Link} from 'react-router-dom'
import CSSlogin from '../CSSstyles/Signin.module.css';
import logo from '../img/logo.png'

export const Signin = () => {
    return (
        <div className="signin">
           <Link to="/">
                <img
                className={CSSlogin.logo} 
                src={logo} 
                alt="qwerty"/>
                </Link>
            
        </div>
    )
}
