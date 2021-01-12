


const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
      
console.log(req.url)
      
let body
        
try {
    body = fs.readFileSync(`./dist${req.url}`)
} catch (err) {
    body = fs.readFileSync('./dist/index.html')
}
      
        
res.end(body)
      
})
      
server.listen(process.env.PORT || 2000)
      // Выводим в консоль, что сервер стартовал
console.log('Server started')