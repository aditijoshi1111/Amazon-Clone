import React, { Component } from "react";
import CSSContact from "../CSSstyles/ContactUs.module.css";

//install-> npm i axios
//in order to make api calls
import axios from "axios";
export default class ContactUs extends Component {
  state = {
    name: "",
    email: "",
    msg: "",
  };
  //handle inputs
  handleNameInput = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleEmailInput = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handleMsgInput = (e) => {
    this.setState({
      msg: e.target.value,
    });
  };
  //submitting form

  formSubmit = (e) => {
    console.log("a");
    e.preventDefault();
    let data = {
      name: this.state.name,
      email: this.state.email,
      msg: this.state.msg,
    };

    axios
      .post("http://localhost:8000/api/contactUs", data)
      .then((res) => {
        console.log("message  sent");
        this.setState(
          {
            sent: true,
          },
          this.resetForm()
        );
      })
      .catch(() => {
        console.log("message not sent");
      });
  };

  //for restatrting form
  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      msg: "",
    });
    setTimeout(() => {
      this.setState({ sent: false });
    }, 3000);
  };

  render() {
    return (
      <div className={CSSContact.container}>
        <img
          className={CSSContact.home_image}
          src="https://connect-assets.prosple.com/cdn/ff/zNryDlf-uf0qIh0kt7iOyMHP2B0NW30YDNDCOXMU-NM/1578558097/public/2020-01/Banner-Amazon-893x321-2020.jpg"
          alt="o snap"
        />
        <div className={CSSContact.form_con}>
          <h1 className={CSSContact.heading}>Contact Us</h1>
          <form method="POST" onSubmit={this.formSubmit}>
            <h4>Name</h4>
            <input
              type="text"
              value={this.state.name}
              placeholder="Your name"
              name="name"
              onChange={this.handleNameInput}
              autoComplete="off"
            />
            <br />
            <h4>E-mail</h4>
            <input
              type="email"
              value={this.state.email}
              placeholder="Your email"
              name="email"
              onChange={this.handleEmailInput}
              autoComplete="off"
            />
            <br />
            <h4>Message</h4>
            <input
              type="text"
              value={this.state.msg}
              placeholder="Description"
              name="msg"
              onChange={this.handleMsgInput}
              autoComplete="off"
            />
            <br />

            <button
              type="submit"
              className={CSSContact.btn}
              //name="sub"
              //value="submit"
            >
              Submit
            </button>
          </form>
          <div className={CSSContact.home_row}>
            <h2>Contact Us</h2>
            <p>Mansi Gulati-mansi1284.cse18@chitkara.edu.in</p>
            <p>Aditi Joshi -aditi1111.cse18@chitkara.edu.in</p>
            <p>Anshika Gupta-anshika1242.cse18@chitkara.edu.in</p>
            <p>Pallavi Grover-pallavi1237.cse18@chitkara.edu.in</p>
            <p>Kingshuk Chaudhary-kingshuk1246.cse18@chitkara.edu.in</p>
          </div>
        </div>
      </div>
    );
  }
}
