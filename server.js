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


let body
  
try {
   body = fs.readFileSync(`./dist${req.url}`)
} catch (err) {
     body = fs.readFileSync('./dist/index.html')
}

app.get(':url', (req, res) => {
    let body
  
    try {
       body = fs.readFileSync(`./dist/${url}`)
    } catch (err) {
         body = fs.readFileSync('./dist/index.html')
    }

    res.send(body)
  })