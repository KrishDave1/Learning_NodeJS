/** @format */

const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req); // When we run the file we do not see the req object in the terminal. This is because the req object is a readable stream and we need to listen to it to see the data.So refresh the page and you will see the req object in the terminal.
  if (req.url === "/") {
    res.end("Welcome to our home pag");
  } else if (req.url === "/about") {
    res.end("Here is our short history");
  } else {
    res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href="/">back home</a>
        `);
  }
});

server.listen(5000);
