var Swiper = require('swiper')
window.Swiper = Swiper

app.directive('swiper', function($timeout, $rootScope) {
  return {
    restrict: 'A',
    link: function postLink($scope, element, attrs) {
      $scope.swiper = new Swiper(element[0], {
        updateOnImagesReady: true
        , keyboardControl: true
        , roundLengths: true
        , speed: 600
      })
      $timeout(function() { $scope.swiper.reInit() }, 0)

      // Replace video thumbnails with <iframe> video players on slide change
      var replaceWithVimeo = function(swiper, direction) {
        var scope = angular.element(swiper.activeSlide()).scope()
        if(scope.video) scope.video.active = true
        if(scope.$$nextSibling && scope.$$nextSibling.video) scope.$$nextSibling.video.active = true
        scope.$apply()
      }
      var repositionOnApp = function() {
        // le jankety
        jQuery('html, body').animate({
          scrollTop: jQuery('#videos').offset().top
        }, 500);
      }
      $scope.swiper.addCallback('Init', replaceWithVimeo)
      $scope.swiper.addCallback('SlideChangeEnd', replaceWithVimeo)
      $scope.swiper.addCallback('SlideChangeStart', repositionOnApp)

      $scope.restart = function() {
        $timeout( function() {
         $scope.swiper.swipeTo(0, 300, true)
        });
      }
    }
  }
})
