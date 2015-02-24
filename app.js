var ng = require('angular') // 752kb
var fs = require('fs')
var vimeoJson = JSON.parse(fs.readFileSync('all.json', 'utf8')) // 232kb

window.app = ng.module('third-av', [])

app.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'player.vimeo.com/**'
  ])
})

app.controller('mainCtrl', ['$scope', '$sce', '$location', '$timeout',
  function($scope, $sce, $location, $timeout) {
    $scope.videos = $scope.recent = vimeoJson.videos.reverse()
    $scope.albums = vimeoJson.albums
    $scope.albums.splice(1, 0, {title: "Latest", slug: "latest", videos: $scope.recent})
    moveLecturesDown()

    $scope.activateAlbum = function(album, dontChangeLocation) {
      $scope.activeAlbum = album;
      if(!dontChangeLocation) $location.path(album.slug);
    }

    // this is a bit clunky. But it should work.
    // (The one problem to look out for is clashing album and video titles)
    $scope.activateVideo = function(video) {
      var latest = $scope.albums[1]
      $scope.activateAlbum(latest, true)
      // wait for the swiper to get initialized before calling `swipeTo` 
      $scope._cancelWatch = $scope.$watch('swiper', function(swiper) {
        if(!swiper) return
        $timeout(function() {
          $scope.swiper.swipeTo(latest.videos.indexOf(video))
          $scope._cancelWatch()
        }, 0)
      })
    }

    $scope.activeAlbum = $scope.albums[0]

    $scope.$on( '$locationChangeSuccess', function(){
      var path = $location.path().substring(1); // Get rid of starting slash
      for( var i = 0; i < $scope.albums.length; i++ ) {
        if(path === $scope.albums[i].slug) {
          $scope.activateAlbum( $scope.albums[i] );
          $timeout(copyThirdAvControlsToWPMenu, 100)
          return
        }
      }

      angular.forEach($scope.videos, function(video) {
        if(path === video.slug) {
          console.log('activating video', video)
          $scope.activateVideo(video)
          return
        }
      })
    });

    function moveLecturesDown() {
      var lectures = $scope.albums.filter(function(album) { return album.title == 'Lectures' })[0]
      $scope.albums.splice($scope.albums.indexOf(lectures), 1)
      $scope.albums.splice(7, 0, lectures)
    }
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
