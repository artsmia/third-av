var fs = require('fs')
  , videos = JSON.parse(fs.readFileSync('vimeo/videos.json', 'utf8'))
  , albums = JSON.parse(fs.readFileSync('vimeo/albums.json', 'utf8'))
  , albumVideos = {}


// TODO: why doesn't this work in browserify?
// Error: Referencealbum is not defined (…/js/vimeoJson.js)
albums.forEach(function(album) {
  album.videos = JSON.parse(fs.readFileSync('vimeo/albums/'+album.id+'.json'))
})

module.exports = {
  videos: videos, albums: albums
}
console.log(JSON.stringify(module.exports))
