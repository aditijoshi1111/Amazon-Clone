const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

function x() {
  resizeBy.send("Welcome to my forma");
}

function sendEmail(req, res) {
  let data = req.body;
  let smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "yuktigrover53@gmail.com",
      pass: "Amazon@123",
    },
  });
  let mailOptions = {
    from: data.email,
    to: "yuktigrover53@gmail.com",
    subject: `message from ${data.name}`,
    html: `
        <h3>Informations</h3>
        <ul>
          <li>Name:${data.name}</li>
          <li>Email:${data.email}</li>
          <h3>Message</h3>
          <p>${data.msg}</p>
          
        </ul>
        `,
  };
  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send("success");
    }
  });
  smtpTransport.close();
}

module.exports.x = x;
module.exports.sendEmail = sendEmail;
