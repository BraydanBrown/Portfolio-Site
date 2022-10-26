const express = require('express')
const app = express()
const port = 3000


/*
function contact(req, res, next) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Contact Me');
} 
*/
app.get('/home', (req, res) => {
  res.send('Home Page')
})

app.get('/about', (req, res) => {
    res.send('About Me')
})

app.get('/contact', (req, res) => {
    res.send('Contact Me')
})

app.get('/projects', (req, res) => {
    res.send('My Projects')
})

app.listen(port, () => {
  console.log(`Portfolio listening on port ${port}`)
})