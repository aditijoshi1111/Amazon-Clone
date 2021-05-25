const express = require("express");
const router = express.Router();

const emailData = require("../controllers/email");

router.get("/", emailData.x);
router.post("/contactUs", emailData.sendEmail);

module.exports = router;
