const http = require('http')
const port = process.env.PORT || 3000
const { fetchSubreddit } = require('fetch-subreddit')
let randomTracks = []

function randomify(max) {
  return Math.floor(Math.random() * (max - 0 + 1)) + 0;
}

const requestHandler = (req, res) => {
  fetchSubreddit('vintageobscura')
  .then((urls) => {
    for (let i = 0; i < 3; i++) {
      const rand = randomify(urls[0].urls.length)
      randomTracks.push({
        track: urls[0].urls[rand]
      })
    }
    const tracks = randomTracks.slice(0, 3)
    res.end(JSON.stringify(tracks))
  })
  .catch((err) => console.error(err))
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) console.error(err)
  console.log(`server is listening on ${port}`)
})
