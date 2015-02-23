var ng = require('angular') // 752kb
var fs = require('fs')
var vimeoJson = JSON.parse(fs.readFileSync('all.json', 'utf8')) // 232kb
var sluggo = require('sluggo') // 8kb

window.app = ng.module('third-av', [])

app.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'player.vimeo.com/**'
  ])
})

app.controller('mainCtrl', ['$scope', '$sce', '$location', '$timeout',
  function($scope, $sce, $location, $timeout) {
    $scope.videos = $scope.recent = vimeoJson.videos
    $scope.albums = vimeoJson.albums
    angular.forEach($scope.albums, function(album) {
      album.slug = sluggo(album.title)
    })
    $scope.albums.splice(1, 0, {title: "Latest", videos: $scope.recent})

    $scope.activateAlbum = function( album ) {
      $scope.activeAlbum = album;
      $location.path(album.slug);
    }

    $scope.activeAlbum = $scope.albums[0]

    $scope.$on( '$locationChangeSuccess', function(){
      var path = $location.path().substring(1); // Get rid of starting slash
      for( var i = 0; i < $scope.albums.length; i++ ) {
        if(path === $scope.albums[i].slug) {
          $scope.activateAlbum( $scope.albums[i] );
          $timeout(copyThirdAvControlsToWPMenu, 100)
        }
      }
    });
  }
])

require('./js/miaVideo')
require('./js/swiper') // 112kb
require('./js/ngUnsafe')

// Bootstrap after page load
document.body.setAttribute( 'ng-controller', 'mainCtrl' );
ng.bootstrap( document.body, ['third-av'] );

// because this is enqueued by wordpress, we can't have it in standalone
window.addEventListener('load', function() {
  FastClick.attach(document.body);
}, false);
function copyThirdAvControlsToWPMenu() {
  var controls = document.getElementById('thirdav-controls').innerHTML;
  if(typeof jQuery !== 'undefined') {
    // Don't build the menu if we aren't in the wordpress theme
    document.getElementById('thirdav-menu').innerHTML = controls;
  }
}
copyThirdAvControlsToWPMenu()
