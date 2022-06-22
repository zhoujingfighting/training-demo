const http = require('http');

const server  = http.createServer((req, res) => {
    res.end('Hello world')
})

server.listen(3001, () => {
    console.log('Listening on port 3001')
})