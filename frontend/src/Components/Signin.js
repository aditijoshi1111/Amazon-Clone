import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { authenticate, isAutheticated, signin } from "../apis/auth";
import CSSlogin from "../CSSstyles/Signin.module.css";
import amazon from "../img/amazon.png";

export const Signin = (props) => {
  const history = useHistory;
  const signup = (e) => {
    e.preventDefault();
    history.push("/signUp");
  };

  const [values, setValues] = useState({
    email: "hulk@gmail.com",
    password: "12345",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { email, password, error, loading, didRedirect } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
            });
           

          });
          //console.log(data.user.name)
          props.setName(data.user.name);
          history.push("/");
        }
      })
      .catch((err) => {
        console.log("signin request failed");
      });
  };

  const performRedirect = () => {
    if (didRedirect) {
      return <Redirect to="/" />;
    } else if (isAutheticated()) {
      return <Redirect to="/" />;
    }
  };


  return (
    
    <div className={CSSlogin.Signin}>
      {performRedirect()}
      <Link to="/">
        <img className={CSSlogin.amazon} src={amazon} alt="Signin-logo" />
      </Link>
      <div className={CSSlogin.Container}>
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="email" onChange={handleChange("email")} value={email} />
          <h5>Password</h5>
          <input
            type="password"
            onChange={handleChange("password")}
            value={password}
          />
          <br />
          <button type="submit" className={CSSlogin.login} onClick={onSubmit}>
            Sign in
          </button>
          <p>
            By signing-in you agree to AMAZON CLONE Conditions of Use & Sale.
            Please see our Privacy Notice, our Cookies Notice and our Interest
            based Ads Notice.
          </p>
          <button type="submit" className={CSSlogin.create} onClick={signup}>
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
