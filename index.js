const express = require('express');
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/aboutme', (req, res) => {
  res.sendFile(__dirname + '/aboutme.html')
})

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/contact.html')
})


app.listen(process.env.PORT || 3000, () => console.log('LIVE on 3000'))
