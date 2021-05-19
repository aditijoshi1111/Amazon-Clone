import React from "react";
import CSSAbout from "../CSSstyles/AboutUs.module.css";

function AboutUs() {
  return (
    <div className={CSSAbout.container}>
      <h1>About Us</h1>
      <div className={CSSAbout.project}>
        <h3>Our Project</h3>
        <p>
          During this difficult pandemic period, people are appreciating the
          convenience of online shopping more and more rather than spending
          hours searching in physical stores as it results in contactless
          delivery at your doorstep. So, our team has developed an eStore
          website having wide range of products that will give sellers the
          opportunity to reach out and offer their products and services to
          customers around the world, regardless of the distance and time zone.{" "}
          <br />
          <br />
          <br />• To develop a single page and responsive web application that
          can be a great platform for all kinds of sellers and hence results in
          expanding their business. Also ensuring a 24 hours service to
          customers providing them with quality content from verified sellers.
          <br /> • To develop an eStore where users can create their own
          accounts, order products and receive the delivery within 3 to 4
          working days. All kinds of payment modes will be made accessible to
          customers so that they can pay at ease.
          <br /> • To introduce a feature named ‘Filter’ in the website where
          the customers can get an option to filter from wide variety of
          products according to their preferences.
          <br /> • To learn how the data on e-commerce websites is processed,
          stored, retrieved and displayed to customers.
        </p>
      </div>
      <div className={CSSAbout.team}>
        <h3>Our Team</h3>
        <table>
          <tr>
            <th>Firstname</th>
            <th>RollNo.</th>
          </tr>
          <tr>
            <td>Mansi Gulati</td>
            <td>1810991284</td>
          </tr>
          <tr>
            <td>Aditi Joshi</td>
            <td>1810991111</td>
          </tr>
          <tr>
            <td>Anshika Gupta</td>
            <td>1810991242</td>
          </tr>
          <tr>
            <td>Pallavi Grover</td>
            <td>1810991237</td>
          </tr>
          <tr>
            <td>Kingshuk</td>
            <td>181099****</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default AboutUs;
