/** @format */
const express = require("express");
const app = express();

const peopleRouter = require('./routes/people');
const authRouter = require('./routes/auth');
// static assets meaning we can now their req.body and update it.
app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false })); // This is to get the data from the form that we used in the html frontend.
// parse json
app.use(express.json());
app.use('/api/people', peopleRouter);
app.use('/login', authRouter);

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
