const express = require("express");
const { isAuthenticated } = require("../controllers/auth");
const router = express.Router();

const upload = require("../controllers/multer");
const prod = require("../controllers/prod");

router.post("/postProduct",isAuthenticated , upload, prod.addProduct);
router.get("/getAllProducts", prod.getAllProducts);
router.get("/removeProduct/:id", isAuthenticated, prod.removeProduct);
router.get("/product/:id",isAuthenticated , prod.getProductById);

module.exports = router;
