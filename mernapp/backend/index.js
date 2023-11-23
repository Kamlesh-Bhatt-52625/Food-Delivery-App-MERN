const express = require("express");
const app = express();
const port = 8080;
const connect = require("./db");
const User = require("./models/User");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());

app.use("/api", require("./Routes/CreateUser"));

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
