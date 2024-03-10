/** @format */

const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./navbar-app/index.html"); // We will be requiring this file only once(meaning fetching it from hard drive only once) and then we will be using it multiple times.
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  // console.log(req.url); // Tells me on which page I am requesting from server.
  // console.log(req.method); // What type of request is requested from server.
  const url = req.url;
  console.log(url);
  // Here why does it not give css or js to the index.html file? Because we are not requesting it from the server. We are just requesting the content of the index.html file and not the links that it is requesting.
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    // WriteHead decides what type of content we are sending back to the client.It is called Mime types.
    res.write(homePage);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  } else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  } else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeImage);
    res.end();
  } else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Page Not Found</h1>");
    res.end();
  }
});

server.listen(5000);

// So Why express ? because it is difficult to request each and every file from the server. So we use express to make our work easier.
