const express = require("express");
const { signup, login } = require("../../backend/Controllers/auth.controller");
const User = require("../../backend/Models/User.model");
const router = express.Router();

router.post("/login", login);

router.post("/signup", async (req, res) => {
  const { username, password, email } = req.body;
  try {
    if (!username || !password || !email) {
      throw new Error("All fields are required");
    }

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      if (existingUser.username === username) {
        return res.status(400).json({ error: "Username already exists" });
      } else if (existingUser.email === email) {
        return res.status(400).json({ error: "Email already exists" });
      }
    }

    await signup(req, res);
  } catch (error) {
    let errorMessage;
    if (error.message.includes("required")) {
      errorMessage = "All fields are required.";
    } else {
      errorMessage = error.message;
    }
    res.status(400).json({ error: errorMessage });
  }
});

module.exports = router;
