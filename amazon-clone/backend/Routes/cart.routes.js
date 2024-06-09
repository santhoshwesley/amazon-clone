const express = require("express");
const { authMiddleware } = require("../Middleware/auth.middleware");
const { addToCart } = require("../Controllers/cart.controller");
const router = express.Router();

router.post("/add", authMiddleware, addToCart);

module.exports = router;
