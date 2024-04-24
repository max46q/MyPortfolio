const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");
const fs = require("fs");
const dotenv = require("dotenv");

dotenv.config();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/add", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send("Please fill in all fields.");
  }

  const data = fs.readFileSync("data.json");
  const contacts = JSON.parse(data);

  contacts.push({ name, email, message });

  fs.writeFileSync("data.json", JSON.stringify(contacts));

  res.redirect("/");
});

app.post("/aa", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "password") {
    res.send("Logged in!");
  } else {
    res.status(401).send("Invalid username or password.");
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
