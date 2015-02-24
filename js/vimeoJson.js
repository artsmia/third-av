var fs = require('fs')
  , videos = JSON.parse(fs.readFileSync('vimeo/videos.json', 'utf8'))
  , albums = JSON.parse(fs.readFileSync('vimeo/albums.json', 'utf8'))
  , albumVideos = {}
  , sluggo = require('sluggo')

// vimeo orders albums by date created.
// re-order to put featured first
featured = albums.filter(function(a) { return a.id == 2800016 }).pop()
albums.splice(albums.indexOf(featured), 1)
albums.splice(0, 0, featured)

// TODO: why doesn't this work in browserify?
// Error: Referencealbum is not defined (…/js/vimeoJson.js)
albums.forEach(function(album) {
  album.slug = sluggo(album.title)
  album.videos = JSON.parse(fs.readFileSync('vimeo/albums/'+album.id+'.json'))
  album.videos.forEach(function(video) {
    video.slug = sluggo(video.title)
  })
})

videos.forEach(function(video) {
  video.slug = sluggo(video.title)
})

module.exports = {
  videos: videos, albums: albums
}
console.log(JSON.stringify(module.exports))
