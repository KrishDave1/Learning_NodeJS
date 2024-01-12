const http = require('http')

const server = http.createServer((req,res) => {
    console.log('request event');
    res.end('Hello world')
})

server.listen(5000 , () => {
    console.log('Server listening on port :5000....');
})

// Here even though server is created first and http web api is called first as we recieve the server.listen api first so it is logged first.