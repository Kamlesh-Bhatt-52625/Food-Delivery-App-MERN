const express = require("express");
const router = express.Router();
const FoodItemModel = require("../models/FoodItems");

router.post("/foodData", (req, res) => {
  try {
    res.send([global.food_items]);
  } catch (error) {
    console.log(error.message);
    res.send("Server Error");
  }
});

module.exports = router;
