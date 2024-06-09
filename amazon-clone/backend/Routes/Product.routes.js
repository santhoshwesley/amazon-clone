const express = require("express");
const router = express.Router();
const productController = require("../Controllers/Product.controller");

router.get("/products", productController.getProductData);

module.exports = router;
