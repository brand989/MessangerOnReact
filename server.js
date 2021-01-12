const express = require('express')
const fs = require('fs') 
const app = express()
const bodyParser = require('body-parser')
let port = process.env.PORT || 2000

app.use(express.static('./dist'))
app.use(bodyParser.json())

app.listen(port , () => {
  console.log("Server started")
})


app.get('/', (req, res) => {
    let body = fs.readFileSync('./dist/index.html')

    res.send(body)
  })

  app.get('/index.bundle.js', (req, res) => {
    let body = fs.readFileSync('./dist/index.bundle.js')
    
    res.send(body)
  })