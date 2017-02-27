(function(ng) {
    "use strict";

    ng.module('ToDontApp').directive('listItem', function() {
        return {
            restrict: 'E',
            templateUrl: './templates/item.html'
        };
    });
})(angular);
