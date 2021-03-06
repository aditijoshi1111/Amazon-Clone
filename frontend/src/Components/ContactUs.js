import React, { useState } from "react";

import CSSContact from "../CSSstyles/ContactUs.module.css";

function ContactUs() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    msg: "",
  });
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  return (
    <div className={CSSContact.container}>
      <img
        className={CSSContact.home_image}
        src="https://connect-assets.prosple.com/cdn/ff/zNryDlf-uf0qIh0kt7iOyMHP2B0NW30YDNDCOXMU-NM/1578558097/public/2020-01/Banner-Amazon-893x321-2020.jpg"
        alt="o snap"
      />
      <div className={CSSContact.form_con}>
        <h1 className={CSSContact.heading}>Contact Us</h1>
        <form>
          <h4>Name</h4>
          <input
            type="text"
            value={user.name}
            onChange={handleInput}
            placeholder="Your name"
            name="name"
          />
          <br />
          <h4>E-mail</h4>
          <input
            type="email"
            s
            value={user.email}
            onChange={handleInput}
            placeholder="Your email"
            name="email"
          />
          <br />
          <h4>Message</h4>
          <input
            type="text"
            value={user.msg}
            onChange={handleInput}
            placeholder="Description"
            name="msg"
          />
          <br />

          <button type="submit" className={CSSContact.btn}>
            Submit
          </button>
        </form>
        <div className={CSSContact.home_row}>
          <h2>Contact Us</h2>
          <p>Mansi Gulati - mansi1284.cse18@chitkara.edu.in</p>
          <p>Aditi Joshi - aditi1111.cse18@chitkara.edu.in</p>
          <p>Kingshuk Choudhury - kingshuk1246.cse18@chitkara.edu.in</p>
          <p>Pallavi Grover - pallavi.cse18@chitkara.edu.in</p>
          <p>Anshika Gupta - anshika.cse18@chitkara.edu.in</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
