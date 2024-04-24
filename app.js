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
app.post("/aa", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username === process.env.USERNAME1 && password === process.env.PASSWORD) {
    console.log("hello");
    res.redirect("/");
  } else {
    console.log("error");
    let error = "геть не той пароль123";
    res.render("Home", { error });
  }
});

app.listen(3000); //port
console.log("server started");
