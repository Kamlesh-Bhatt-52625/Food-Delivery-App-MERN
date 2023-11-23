const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

router.post(
  "/createuser",
  [
    // username must be an email
    body("email").isEmail(),
    //
    body("name").isLength({ min: 5 }),
    // password must be at least 5 chars long
    body("password", "Password must be alteast 5 characters.").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

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
  }
);

module.exports = router;
