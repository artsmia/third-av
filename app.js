var ng = require('angular')
  , vimeoJson = require('./all')

window.app = ng.module('third-ave', [])

app.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'player.vimeo.com/**'
  ])
})

app.controller('mainCtrl', ['$scope', '$sce',
  function($scope, $sce) {
    $scope.videos = $scope.recent = vimeoJson.videos
    $scope.albums = vimeoJson.albums
    $scope.albums.unshift({
      title: "Recent Videos"
      , videos: $scope.recent
    })

    $scope.activateAlbum = function(album) {
      $scope.activeAlbum = album
    }
    $scope.activeAlbum = $scope.albums[0]
  }
])

require('./js/miaVideo')
require('./js/swiper')
require('./js/ngUnsafe')
