const http = require('http')
const server = http.createServer((req,res) => {
    console.log('new connection')
    res.end('Hello This is second Devops1 -sample Pipeline') 
})
const PORT = process.env.port || 8080
server.listen(PORT,() => console.log('Listening'))
