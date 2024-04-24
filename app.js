const express = require("express");
const app = express();
const ejs = require("ejs");
const bodyParser = require("body-parser");
require("dotenv").config();
app.engine("ejs", require("ejs").renderFile);
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  let error = "";
  res.render("Home", { error }); // відкриває html файл
});

app.get("/base", function (req, res) {
  res.render("otherFile");
});

app.post("/add", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  res.render("result", { name, email });
});
app.post("/aa", (req, res) {
  const { username, password } = req.body;
  if (username === "admin" && password === "password") {
    res.send("Logged in!");
  } else {
    res.status(401).send("Invalid username or password.");
  }
});
const port = process.env.PORT || 3000;
app.listen(port); //port
console.log("server started");
