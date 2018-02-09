const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const utilities = require('./libs/utilities')

app.get('/', async (req, res) => {
  const fetchReddit = await utilities.fetchReddit()
  res.end(JSON.stringify({
    tracks: fetchReddit
  }))
})

app.listen(port, () => {
  console.log(`Reddit Rhythm Roulette on port ${port}!`)
})
