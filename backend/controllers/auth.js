const userModel = require("../models/user");
const jwt = require("jsonwebtoken");
async function signup(req, res) {
  try {
    let user = req.body;
    let newUser = await userModel.create({
      name: user.name,
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

module.exports.signup=signup