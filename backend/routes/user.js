const express = require("express");
const {
  signup,
  login,
  isAuthenticated,
  isAdmin,
  logOut,
} = require("../controllers/auth");
const { getUserById } = require("../controllers/user");
const router = express.Router();

router.post("/signup", signup);
router.post("/signin", login);
router.get("/signout", logOut);
router.get("/user/:userId", isAuthenticated, getUserById);

// router.get("/test", isAuthenticated,(req,res)=>{
//   console.log(req.id)
// });
module.exports = router;
