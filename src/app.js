const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "hbs");

const path = require("path");
const x = path.join(__dirname, "../public");
app.use(express.static(x));

const viewDirectory = path.join(__dirname, "../template1/views");
app.set("views", viewDirectory);

const hbs = require("hbs");
const exp = require("constants");
const partialPath = path.join(__dirname, "../template1/partials");
hbs.registerPartials(partialPath);

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home",
    message: "Welcome to Home Page ^_^ ",
  });
});

app.get("/checkWeather", (req, res) => {
  res.render("checkWeather", {
    title: "Weather",
    countryName: "Egypt",
    longtitude: "31.250",
    latitude: "30.050",
    currentWeather: "Sunny",
    temperature: 32,
  });
});
// app.get('/', (req,res) => {
//         res.send()
// })

app.listen(port, () => {
  console.log("Done");
});
