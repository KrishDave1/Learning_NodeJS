/** @format */

const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");
const morgan = require("morgan");
// We can use morgan for auth.

// app.use('/api', logger) // This line ensures that the middleware function 'logger' is called in each request on any given url.

// Writing /api will ensure that the middleware function is applied on all urls containing /api.Writing nothing will ensure that the middleware function is applied on all urls.

// For multiple middleware functions we can write them as an array.
// app.use([logger, authorize]);

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send("Products");
});
app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("Items");
});

// Lessons learnt
// 1. use vs route
// 2. options - our own / express / third party

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
