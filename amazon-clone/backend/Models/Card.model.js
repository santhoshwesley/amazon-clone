const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  title: String,
  items: [{ title: String, imgSrc: String, link: String }],
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
