const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  items: [
    {
      imgSrc: String,
      offer: String,
      offerType: String,
      price: String,
      listPrice: String,
      description: String,
    },
  ],
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
