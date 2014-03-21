var fs = require('fs')
  , videos = JSON.parse(fs.readFileSync('all.json', 'utf8'))
  , template = require('./videos.jade')
  , videoList = template({videos: videos})

document.querySelector('#videos #featured .panes').innerHTML = template({videos: videos.slice(3)})
document.querySelector('#videos #popular').innerHTML = videoList
document.querySelector('#videos #recent').innerHTML = videoList


