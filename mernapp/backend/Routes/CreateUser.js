const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/createuser", async (req, res) => {
  try {
    await User.create({
      name: "Kamlesh Bhatt",
      password: "123456",
      email: "kamlesh@hotmail.com",
      location: "Nainital",
    });

    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

module.exports = router;
