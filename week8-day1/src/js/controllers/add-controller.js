(function(ng) {
    "use strict";

    ng.module('ToDontApp').controller('AddController', function($scope, ItemService) {
        $scope.item = {};
        $scope.allItems = ItemService.get() || [];

        $scope.addItem = function() {
            $scope.item.id = Date.now();
            ItemService.add($scope.item);
            $scope.item = {};
            $scope.allItems = ItemService.get();
        };
    });

})(angular);
