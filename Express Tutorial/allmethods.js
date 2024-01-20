/** @format */

const express = require("express");
const app = express();
let { people } = require("./data");

// static assets
app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false })); // This is to get the data from the form that we used in the html frontend.
// parse json
app.use(express.json());

// METHOD - GET.
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// What this post method does is it provides a endpoint where the post request from the frontend is being handled.
// Traditional FORM Example.
app.post("/login", (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Invalid username or password");
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  console.log(req.body);
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).json({ success: true, person: name });
});

// METHOD - POST using postman.
app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).json({ success: true, data: [...people, name] });
});

// METHOD - PUT.
app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === parseInt(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `person not found  with ${id}` });
  }
  const newPeople = people.map((person) => {
    if (person.id === parseInt(id)) {
      person.name = name; // THis changes the people array.
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
});

app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id === parseInt(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `person not found  with ${id}` });
  }
  const newPeople = people.filter((person) => person.id !== parseInt(id));
  res.status(200).json({ success: true, data: newPeople });
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
