const express = require("express");
const router = express.Router();
const cardController = require("../Controllers/Card.controller");

router.get("/cards", cardController.getCardData);

module.exports = router;
