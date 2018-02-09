const { fetchSubreddit } = require('fetch-subreddit')

const utilities = module.exports = {}

utilities.randomify = (max) => {
  return Math.floor(Math.random() * (max - 0 + 1)) + 0
}

utilities.fetchReddit = () => {
  let randomTracks = []
  return fetchSubreddit('vintageobscura')
  .then((urls) => {
    while (randomTracks.length < 3) {
      const rand = utilities.randomify(urls[0].urls.length)
      if (urls[0].urls[rand] && (randomTracks.indexOf(urls[0].urls[rand]) > -1 || !urls[0].urls[rand].includes('reddit'))) {
        randomTracks.push(urls[0].urls[rand])
      }
    }
    const tracks = randomTracks.slice(0, 3)
    return JSON.stringify({
      tracks
    })
  })
  .catch(err => console.error(err))
}
