const staticSite = require('static-site')

const options = {}

console.log('Generating static site');

staticSite(options, function (err, stats) {
  console.log(stats) // {pages: [...], source: '', build: '', start: 1434175863750, end: 1434175863770, duration: 20}
})

