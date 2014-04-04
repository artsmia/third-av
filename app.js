var ng = require('angular')
  , fs = require('fs')
  , vimeoJson = JSON.parse(fs.readFileSync('all.json', 'utf8'))
  , controls = document.getElementById('thirdav-controls').innerHTML;

window.app = ng.module('third-av', [])

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
    $scope.albums.splice(1, 0, {title: "Recent", videos: $scope.recent})

    $scope.activateAlbum = function(album) { $scope.activeAlbum = album }
    $scope.activeAlbum = $scope.albums[0]
  }
])

require('./js/miaVideo')
require('./js/swiper')
require('./js/ngUnsafe')

window.addEventListener('load', function() {
  FastClick.attach(document.body);
}, false);

// Bootstrap after page load
document.body.setAttribute( 'ng-controller', 'mainCtrl' );
document.getElementById('thirdav-menu').innerHTML = controls;
ng.bootstrap( document.body, ['third-av'] );