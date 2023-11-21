const mongoose = require("mongoose");
const mongoURL =
  "mongodb+srv://quickeats:quickeats@cluster0.o8r5zi1.mongodb.net/?retryWrites=true&w=majority";
const connect = () => {
  mongoose.connect(mongoURL, () => {
    console.log("Database Connection done");
  });
};

module.exports = connect;
