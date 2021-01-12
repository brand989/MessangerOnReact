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

let body = fs.readFileSync('./public/index.html')

app.get('/', (req, res) => {
    res.send(body)
   

  })