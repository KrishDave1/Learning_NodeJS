/** @format */

const express = require("express");
const app = express();

// Middleware is a set of functions that execute while an Express application processes HTTP requests.(Formal definition)

// req => middleware => res.

//How is this function able to access req when we haven't passed it? Because express does it for me, it implicitly understands that this is a middleware function so it passes req,res,next to it.
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  // There are 2 options here -
  // 1) Either you break the cycle for this url and say that I will send the response from here, then this will break the cycle and the part written in app.get will not work.
  // res.send("testing");
  // 2) You can use next to pass the control to the next middleware function, meaning if any other such function is present then to that function or directly to app.get to do its own functionality.
  next();
};

// Here what we write here in between the url and (req,res) is middleware.
// Middleware is set of function that we need to use in multiple urls.So instead of copy pasting we use middleware functions and we call them in multiple routes.
app.get("/", logger, (req, res) => {
  res.send("Home");
});

app.get("/about", logger, (req, res) => {
  res.send("About");
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
