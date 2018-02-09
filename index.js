const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const utilities = require('./libs/utilities')
const path = require('path')
const bodyParser = require('body-parser')

app.set('views', path.join(__dirname, 'public/views'))
app.set('view engine', 'pug')
app.locals.basedir = path.join(__dirname, '/')
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json({
  extended: true
}))

app.get('/', async (req, res) => {
  const getData = await utilities.fetchReddit()
  res.render('index', {
    tracks: JSON.parse(getData).tracks
  })
})

app.listen(port, () => {
  console.log(`Reddit Rhythm Roulette on port ${port}!`)
})
