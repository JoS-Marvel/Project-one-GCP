const http = require('http')
const server = http.createServer((req,res) => {
    console.log('new connection')
    res.end('Hello This is first DevOps Pipeline1:-') 
})
const PORT = process.env.port || 8080
server.listen(PORT,() => console.log('Listening'))
