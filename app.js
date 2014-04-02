var ng = require('angular')
var fs = require('fs')
var vimeoJson = JSON.parse(fs.readFileSync('all.json', 'utf8'))
var controls = document.getElementById('thirdav-controls').innerHTML;

window.app = ng.module('third-av', [])

app.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'player.vimeo.com/**'
  ])
})

app.controller('mainCtrl', ['$scope', '$sce', '$location',
  function($scope, $sce, $location) {
    $scope.videos = $scope.recent = vimeoJson.videos
    $scope.albums = vimeoJson.albums
    $scope.albums.splice(1, 0, {title: "Latest", videos: $scope.recent})

    $scope.activateAlbum = function( album ) {
      $scope.activeAlbum = album;
      $location.path( album.title );
    }

    $scope.activeAlbum = $scope.albums[0]

    $scope.$on( '$locationChangeSuccess', function(){
      var path = $location.path().substring(1); // Get rid of starting slash
      for( var i = 0; i < $scope.albums.length; i++ ) {
        if( path.toLowerCase() === $scope.albums[i].title.toLowerCase() ){
          $scope.activateAlbum( $scope.albums[i] );
        }
      }
    });
  }
])

require('./js/miaVideo')
require('./js/swiper')
require('./js/ngUnsafe')

if(typeof jQuery !== 'undefined') {
  // We're in the wordpress theme
  // Bootstrap after page load
  document.body.setAttribute( 'ng-controller', 'mainCtrl' );
  document.getElementById('thirdav-menu').innerHTML = controls;
  ng.bootstrap( document.body, ['third-av'] );

  // because this is enqueued by wordpress, we can't have it in standalone
  window.addEventListener('load', function() {
    FastClick.attach(document.body);
  }, false);
}
