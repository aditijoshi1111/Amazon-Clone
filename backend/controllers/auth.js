const userModel = require("../models/user");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
async function signup(req, res) {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({
        error: errors.array()[0].msg,
      });
    }
    let user = req.body;
    let newUser = await userModel.create({
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      password: user.password,
      role: user.role,
    });
    // console.log(newUser);
    res.status(201).json({
      message: "Succesfully Signed up !!",
      data: newUser,
    });
  } catch (error) {
    res.status(501).json({
      message: "Failed to sign up !!",
      error,
    });
  }
}
async function login(req, res) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        error: errors.array()[0].msg,
      });
    }

    let { email, password } = req.body;
    //console.log(email, password);
    let loggedInUser = await userModel.find({ email: email });
    // console.log(loggedInUser)
    if (loggedInUser.length) {
      let user = loggedInUser[0];
      //console.log(user.autheticate(password))
      if (user.autheticate(password)) {
        // token
        const token = jwt.sign({ id: user["_id"] }, "dsgisgsfsgnflnf", {
          expiresIn: "86400s",
        });

        res.cookie("jwt", token, { httpOnly: true });

        const { _id, name, email, role } = user;
        return res
          .status(400)
          .json({ token, user: { _id, name, email, role } });
        //redirect
      } else {
        res.status(400).json({
          error: "Email and Password didn't Matched !!",
        });
      }
    } else {
      res.status(400).json({
        error: "No User Found SignUp First",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Login Failed !!",
      error,
    });
  }
}

async function logOut(req, res) {
  try {
    res.clearCookie("jwt");
    res.status(200).json({
      message: "Logout succesfully!",
    });
  } catch (error) {
    res.status(501).json({
      error,
    });
  }
}

//middlewares

async function isAuthenticated(req, res, next) {
  try {
    const token = req.cookies.jwt;
    //console.log("Inside function");
    const payload = jwt.verify(token, "dsgisgsfsgnflnf");
    //console.log(payload);
    if (payload) {
      // logged in
      let user = await userModel.findById(payload.id);
      req.id = user.id;
      next();
    } else {
      res.status(501).json({
        message: "Please Log in !!",
      });
    }
  } catch (error) {
    res.status(501).json({
      message: "Please Log in !!",
      error,
    });
  }
}

async function isAdmin(req, res, next) {
  try {
    let id = req.id;
    let user = await userModel.findById(id);
    console.log(user);
    if (user.role == "admin") {
      next();
    } else {
      res.status(200).json({
        message: "You dont have admin rights !!!",
      });
    }
  } catch (error) {
    res.status(501).json({
      message: "Failed to Authorize",
      error,
    });
  }
}

module.exports.signup = signup;
module.exports.login = login;
module.exports.logOut = logOut;
module.exports.isAuthenticated = isAuthenticated;
module.exports.isAdmin = isAdmin;
