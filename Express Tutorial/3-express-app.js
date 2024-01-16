const express = require("express");
const path = require("path");
const app = express();

// setup static and middleware.
app.use(express.static("./public"));
// So what is public folder? It is a folder that contains all the static assets.Meaning all the files that are not going to change during the lifetime of our application.
// Also the files may be dynamic for browser but they are static for the server.


// app.get('/', (req,res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//     adding to static assets as for a server it is a static asset.
//     SSR
// })

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});