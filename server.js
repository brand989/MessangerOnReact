const express = require('express')
const fs = require('fs') 
const app = express()
const bodyParser = require('body-parser')

app.use(express.static('./dist'))
app.use(bodyParser.json())

app.listen('8000', () => {
  console.log("Server started")
})