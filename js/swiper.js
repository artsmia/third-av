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
      })
      $timeout(function() { $scope.swiper.reInit() }, 0)
    }
  }
})
