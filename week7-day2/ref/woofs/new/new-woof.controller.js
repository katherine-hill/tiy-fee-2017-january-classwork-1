angular.module('woof').controller('newWoofCtrl', function ($scope, Woofs, $state) {
  $scope.maxTextLength = 120;

  $scope.create = function () {
    Woofs.create($scope.woofText);
    $state.go('woof.index');
  };
});
