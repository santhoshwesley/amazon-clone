const User = require("../Models/User.model");
const Product = require("../Models/Product.model");

exports.addToCart = async (req, res) => {
  const { productId } = req.body;
  try {
    const user = await User.findById(req.user.userId);
    user.cart.push(productId);
    await user.save();
    res.status(200).json({ message: "Product added to cart" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
