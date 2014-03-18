var fs = require('fs')
  , videos = JSON.parse(fs.readFileSync('all.json', 'utf8'))
  , template = require('./videos.jade')

document.querySelector('#videos').innerHTML = template({videos: videos})
