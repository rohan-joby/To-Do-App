const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//to use EJS as view engine
app.set("view engine", "ejs");

//to use body-parser
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const day = "remember";
  res.render("List.ejs", { dataReceive: day });
});

app.listen(3000, () => console.log("Port started at port 3000!"));
