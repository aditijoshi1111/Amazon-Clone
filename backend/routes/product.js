const express = require("express");
const router = express.Router();

const upload = require("../controllers/multer");
const prod=require("../controllers/prod")


router.post("/postProduct", upload, prod.addProduct);
router.get("/getAllProducts",prod.getAllProducts);
router.get("/removeProduct/:id", prod.removeProduct);

module.exports=router;