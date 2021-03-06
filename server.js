const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000

var app = express()

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))

app.get('/', (request, response) => {
  response.render('home.hbs', {
    currentPage: 'Home'
  })
})

app.listen(port)
