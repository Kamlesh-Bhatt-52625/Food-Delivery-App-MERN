const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/createuser", async (req, res) => {
  try {
    const { name, password, email, location } = req.body;
    await User.create({
      name: name,
      password: password,
      email: email,
      location: location,
    });

    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

module.exports = router;
