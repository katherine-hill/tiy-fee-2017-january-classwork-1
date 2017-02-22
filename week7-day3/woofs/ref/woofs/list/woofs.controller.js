angular.module('woof').controller('woofsCtrl', function ($scope, Woofs, $stateParams) {
  $scope.woofFilter = $stateParams.filter || 'all';
  $scope.woofFilters = {
    all: { },
    starred: { starred: true }
  };

  Woofs.fetch().then(function (woofs) {
    $scope.woofs = woofs;
  });

  $scope.toggleStar = function(woof) {
    Woofs.toggleStar(woof);
  };
});
