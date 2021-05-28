const express = require("express");
const {
  signup,
  login,
  isAuthenticated,
  isAdmin,
  logOut,
} = require("../controllers/auth");
const {
  getUserById,
  getAllUsers,
  updateUserById,
  deleteUserById,
} = require("../controllers/user");
const { check, validationResult } = require("express-validator");
const router = express.Router();

//auth
router.post(
  "/signup",
  [
    check("name", "name should be at least 3 char").isLength({ min: 3 }),
    check("email", "email is required").isEmail(),
    check("password", "password should be at least 3 char").isLength({
      min: 3,
    }),
  ],
  signup
);
router.post(
  "/signin",
  [
    check("email", "email is required").isEmail(),
    check("password", "password field is required").isLength({ min: 1 }),
  ],
  login
);
router.get("/signout", logOut);

//users
router.get("/user/:userId", isAuthenticated, getUserById);
router.get("/users", isAuthenticated, getAllUsers);
router.put("/user/:userId", isAuthenticated, updateUserById);
router.delete("/user/:userId", isAuthenticated, deleteUserById);

// router.get("/test", isAuthenticated,(req,res)=>{
//   console.log(req.id)
// });
module.exports = router;
