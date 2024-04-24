const express = require("express");
const app = express();
const ejs = require("ejs");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public")); // Add this line
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("home.ejs"); // відкриває html файл
});
// app.post('/add', (req, res) => {
//   const name = req.body.name
//   const email = req.body.email

//   res.render('result', { name, email })
// })
app.get("/base", function (req, res) {
  res.render("otherFile");
});
app.listen(3000);
console.log("server started");
