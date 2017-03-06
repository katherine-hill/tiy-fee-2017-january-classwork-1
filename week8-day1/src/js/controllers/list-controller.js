(function(ng) {
    "use strict";

    ng.module('ToDontApp').controller('ListController', function($scope, ItemService) {
        $scope.allItems = [];

        $scope.getItems = function() {
            $scope.allItems = ItemService.get();
            return $scope.allItems;
        };

        $scope.deleteItem = function(id) {
            ItemService.delete(id);
        };
    });

})(angular);
