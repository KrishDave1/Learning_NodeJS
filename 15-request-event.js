const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer();
// emits request event
// subcribe to it / listen for it / respond to it

//The below line is showing how the http createServer also uses a eventemitter method for its functionality.
server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(5000);
