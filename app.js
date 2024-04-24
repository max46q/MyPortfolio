const express = require("express");
const app = express();
const ejs = require("ejs");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("home.ejs"); // відкриває html файл
});

app.get("/base", function (req, res) {
  res.render("otherFile");
});

app.post("/add", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  res.render("result", { name, email });
});
app.post("/aa", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  console.log(username, password);
  res.redirect("/")
});

app.listen(3000); //port
console.log("server started");
