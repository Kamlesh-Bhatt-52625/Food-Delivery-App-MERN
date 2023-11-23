const express = require("express");
const app = express();
const port = 8080;
const connect = require("./db");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

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
