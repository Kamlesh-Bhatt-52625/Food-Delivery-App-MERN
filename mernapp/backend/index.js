const express = require("express");
const app = express();
const port = 8080;
const connect = require("./db");

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, async () => {
  try {
    await connect;
    console.log("Connected to Database");
  } catch (error) {
    console.log("Error connecting to Database");
    console.log(error);
  }
  console.log(`App is live at port ${port}`);
});
