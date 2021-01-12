const express = require('express')
const fs = require('fs') 
const app = express()
const bodyParser = require('body-parser')
let port = process.env.PORT || 2000
const path = require('path');
const cool = require('cool-ascii-faces');


express()
    .use(express.static(path.join(__dirname, './dist')))
    .get('/', (req, res) => res.render('./dist/index.html'))
    .get('/cool', (req, res) => res.send(cool()))
    .listen(port , () => {
        console.log("Server started")
      })