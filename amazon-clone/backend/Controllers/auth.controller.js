const User = require("../Models/User.model");
const jwt = require("jsonwebtoken");
// const { JWT_SECRET } = process.env;

exports.signup = async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const user = await User.create({ username, password, email });
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
