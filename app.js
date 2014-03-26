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
    $scope.videos = vimeoJson.videos
    $scope.albums = vimeoJson.albums
  }
])

require('./js/miaVideo')
require('./js/swiper')
require('./js/ngUnsafe')
