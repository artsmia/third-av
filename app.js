var ng = require('angular')
  , fs = require('fs')
  , videos = JSON.parse(fs.readFileSync('all.json', 'utf8'))

window.app = ng.module('third-ave', [])

app.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'player.vimeo.com/**'
  ])
})

app.controller('mainCtrl', ['$scope', '$sce',
  function($scope, $sce) {
    $scope.videos = videos
  }
])

require('./js/miaVideo')
require('./js/swiper')
