const { fetchSubreddit } = require('fetch-subreddit')

const utilities = module.exports = {}

utilities.randomify = (max) => {
  return Math.floor(Math.random() * (max - 0 + 1)) + 0
}

utilities.fetchReddit = () => {
  const subReddits = [
    'vintageobscura',
    'SoulMusic',
    'JazzMusic',
    'Jazz'
  ]
  let randomTracks = []
  let everything = []
  let array = []
  return fetchSubreddit(subReddits)
  .then((urls) => {
    urls.forEach(tracks => {
      everything.push(tracks.urls)
    })
    const completeList = array.concat(everything[0], everything[1], everything[2], everything[3])
    while (randomTracks.length < 3) {
      const rand = utilities.randomify(completeList.length)
      if (completeList[rand] && (randomTracks.indexOf(completeList[rand]) > -1 || completeList[rand].includes('youtu'))) {
        randomTracks.push(completeList[rand])
      }
    }
    return randomTracks.slice(0, 3)
  })
  .catch(err => console.error(err))
}
