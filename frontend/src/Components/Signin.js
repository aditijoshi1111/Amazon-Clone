import React from 'react'
import { Link } from 'react-router-dom'
import CSSlogin from '../CSSstyles/Signin.module.css';
import amazon from '../img/amazon.png'

export const Signin = () => {
    return (
        <div className={CSSlogin.Signin}>
            <Link to="/Home">
                <img className={CSSlogin.amazon} src={amazon} alt="Signin-logo" />
            </Link>
            <div className={CSSlogin.Container}>
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email"/>
                    <h5>Password</h5>
                    <input type="password" /><br/>
                    <button type="submit" className={CSSlogin.login} >Sign in</button>
                    <p>By signing-in you agree to AMAZON CLONE Conditions of
                       Use & Sale. Please see our Privacy Notice, our
                       Cookies Notice and our Interest based Ads Notice.
                    </p>
                    <button type="submit" className={CSSlogin.create} >Create your Amazon Account</button>
                </form>
            </div>
        </div>
    )
}
