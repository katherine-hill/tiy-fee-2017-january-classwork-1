'use strict';

(function (ng) {
    "use strict";

    ng.module('ToDontApp', ['LocalStorageModule']);
})(angular);
'use strict';

(function (ng) {
    "use strict";

    ng.module('ToDontApp').controller('AddController', function ($scope, ItemService) {
        $scope.item = {};
        $scope.allItems = ItemService.get() || [];

        $scope.addItem = function () {
            $scope.item.id = Date.now();
            ItemService.add($scope.item);
            $scope.item = {};
            $scope.allItems = ItemService.get();
        };
    });
})(angular);
'use strict';

(function (ng) {
    "use strict";

    ng.module('ToDontApp').controller('ListController', function ($scope, ItemService) {
        $scope.allItems = [];

        $scope.getItems = function () {
            $scope.allItems = ItemService.get();
            return $scope.allItems;
        };

        $scope.deleteItem = function (id) {
            ItemService.delete(id);
        };
    });
})(angular);
"use strict";

(function (ng) {
    "use strict";

    ng.module('ToDontApp').service("ItemService", function (StorageService) {

        var items = StorageService.get('tasks') || [];

        function add(item) {
            items.push(item);
            StorageService.set('tasks', items);
        }

        function get() {
            return items;
        }

        function deleteItem(id) {
            for (var i = 0; i < items.length; i++) {
                if (items[i].id === id) {
                    items.splice(i, 1);
                }
            }
            StorageService.set('tasks', items);
        }

        return {
            add: add,
            get: get,
            delete: deleteItem
        };
    });
})(angular);
'use strict';

(function (ng) {
    "use strict";

    ng.module('ToDontApp').service('StorageService', function (localStorageService) {
        function setItems(key, value) {
            localStorageService.set(key, value);
        }

        function getItems(key) {
            return localStorageService.get(key);
        }

        return {
            set: setItems,
            get: getItems
        };
    });
})(angular);
'use strict';

(function (ng) {
    "use strict";

    ng.module('ToDontApp').directive('listItem', function () {
        return {
            restrict: 'E',
            templateUrl: './templates/item.html'
        };
    });
})(angular);