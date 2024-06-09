const getProductData = (req, res) => {
  res.json({ message: "Product data retrieved successfully", data: [] });
};

module.exports = {
  getProductData,
};
