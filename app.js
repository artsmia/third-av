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
    $scope.videos = videos.map(function(v) {
      v.embedUrl = $sce.trustAsResourceUrl("//player.vimeo.com/video/"+v.id)
      return v
    })

    $scope.replaceWithVimeo = function() {
      this.video.active = true
    }
  }
])
