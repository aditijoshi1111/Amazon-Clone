import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { signup } from "../apis/auth";
import CSSlogin from "../CSSstyles/Signin.module.css";
import amazon from "../img/amazon.png";


export const SignUp = () => {
    const history=useHistory();
  const [values, setValues] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "12345",
    error: "",
    success: false,
  });

  const { name, email, password, lastname, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, lastname, email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.err, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            lastname: "",
            success: true,
          });
          history.push("/signIn");
        }

      })

      .catch((err) => {
        console.log("Error in signup", err);
      });
  };
  return (
    <div className={CSSlogin.Signin}>
      <Link to="/">
        <img className={CSSlogin.amazon} src={amazon} alt="Signin-logo" />
      </Link>
      <div className={CSSlogin.Container}>
        <h1>Sign-Up</h1>
        <form>
          <h5>Name</h5>
          <input type="text" onChange={handleChange("name")} value={name} />
          <h5>Last Name</h5>
          <input
            type="text"
            onChange={handleChange("lastname")}
            value={lastname}
          />
          <h5>E-mail</h5>
          <input
            type="email"
            type="text"
            onChange={handleChange("email")}
            value={email}
          />
          <h5>Password</h5>
          <input
            type="password"
            onChange={handleChange("password")}
            value={password}
          />
          <br />
          <button type="button" className={CSSlogin.login} onClick={onSubmit}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
