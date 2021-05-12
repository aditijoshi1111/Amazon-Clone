import React from "react";

import CSSContact from "../CSSstyles/ContactUs.module.css";

function ContactUs() {
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
          <input type="text" />
          <br />
          <h4>E-mail</h4>
          <input type="email" />
          <br />
          <h4>Message</h4>
          <input type="text" />
          <br />

          <button type="submit" className={CSSContact.btn}>
            Submit
          </button>
        </form>
        <div className={CSSContact.home_row}>
          <h2>Contact Us At:</h2>
          <p>Mansi Gulati-mansi1284.cse18@chitkara.edu.in</p>
          <p>Aditi Joshi -aditi1111.cse18@chitkara.edu.in</p>
          <p>Mansi Gulati-mansi1284.cse18@chitkara.edu.in</p>
          <p>Mansi Gulati-mansi1284.cse18@chitkara.edu.in</p>
          <p>Mansi Gulati-mansi1284.cse18@chitkara.edu.in</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
