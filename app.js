const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//to use EJS as view engine
app.set("view engine", "ejs");

//to use body-parser
app.use(bodyParser.urlencoded({ extended: true }));

let items = [];

app.get("/", (req, res) => {
  const currentDay = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const day = currentDay.toLocaleDateString("en-IN", options);

  res.render("List.ejs", { dayInfo: day, listItems: items });
});

app.post("/", (req, res) => {
  const item = req.body.itemInput;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, () => console.log("Port started at port 3000!"));
