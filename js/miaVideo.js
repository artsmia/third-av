app.directive('miaVideo', function($sce, $window) {
  return {
    template: '<iframe ng-src="{{embedUrl}}" height="{{height}}" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    restrict: 'EA',
    replace: true,
    scope: { videoId: '@' },
    link: function postLink($scope, element, attrs) {
      $scope.embedUrl = $sce.trustAsResourceUrl("//player.vimeo.com/video/"+$scope.videoId+"?portrait=0&title=0&byline=0")

      $scope.getWidth = function() {
        return parseInt(element[0].clientWidth) * (9/16)
      };

      $scope.$watch($scope.getWidth, function(newValue, oldValue) {
        $scope.height = Math.min(document.body.clientHeight, newValue);
      });

      var _apply = function(e) {
        $scope.$apply()
      }
      $window.addEventListener('resize', _apply)
      $window.addEventListener('onorientationchange', _apply)

      element[0].addEventListener('load', function(e) {
        $scope.$parent.video.loaded = true
        $scope.$parent.$apply()
      })
    }
  }
})

