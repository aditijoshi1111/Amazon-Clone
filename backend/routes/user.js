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
  deleteUserById
} = require("../controllers/user");
const router = express.Router();

//auth
router.post("/signup", signup);
router.post("/signin", login);
router.get("/signout", logOut);

//users
router.get("/user/:userId", isAuthenticated, getUserById);
router.get("/users", isAuthenticated, isAdmin, getAllUsers);
router.put("/user/:userId", isAuthenticated, updateUserById);
router.delete("/user/:userId", isAuthenticated, deleteUserById);


// router.get("/test", isAuthenticated,(req,res)=>{
//   console.log(req.id)
// });
module.exports = router;
