const getCardData = (req, res) => {
  res.json({ message: "Card data retrieved successfully", data: [] });
};

module.exports = {
  getCardData,
};
