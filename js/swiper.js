var Swiper = require('swiper')
window.Swiper = Swiper

app.directive('swiper', function($timeout) {
  return {
    restrict: 'A',
    link: function postLink($scope, element, attrs) {
      $scope.swiper = new Swiper(element[0], {
        updateOnImagesReady: true
        , centeredSlides: true
        , slidesPerView: 2
        , keyboardControl: true
        , roundLengths: true
      })
      $timeout(function() { $scope.swiper.reInit() }, 0)

      // Replace video thumbnails with <iframe> video players on slide change
      var replaceWithVimeo = function(swiper, direction) {
        var scope = angular.element(swiper.activeSlide()).scope()
        if(scope.video) scope.video.active = true
        if(scope.$$nextSibling && scope.$$nextSibling.video) scope.$$nextSibling.video.active = true
        scope.$apply()
      }
      $scope.swiper.addCallback('Init', replaceWithVimeo)
      $scope.swiper.addCallback('SlideChangeStart', replaceWithVimeo)

      $scope.swiper.addCallback('SlideChangeStart', function(swiper, direction) {
        var swiped = swiper.activeIndex > 0
        $scope.$parent.swiped = $scope.$parent.$parent.swiped = swiped
        $scope.$apply()
      })

      $scope.restart = function() {
        $scope.swiper.swipeTo(0, 300, true)
      }
    }
  }
})
