const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//to use EJS as view engine
app.set("view engine", "ejs");

//to use body-parser
app.use(bodyParser.urlencoded({ extended: true }));

//set up folder to access static files
app.use(express.static("public"));

//array to save User inputs
let items = [];

//response to GET request to HOME route
app.get("/", (req, res) => {
  //setting cuurent day
  const currentDay = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const day = currentDay.toLocaleDateString("en-IN", options);

  //pass variables to List.ejs file to render
  res.render("List.ejs", {
    dayInfo: day,
    listItems: items,
  });
});

//response to POST request to HOME route
app.post("/", (req, res) => {
  const item = req.body.itemInput;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, () => console.log("Port started at port 3000!"));
