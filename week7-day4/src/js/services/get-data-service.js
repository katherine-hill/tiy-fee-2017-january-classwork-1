(function() {
    angular.module('MoviesApp').service('GetDataService', function($http) {
        function fetchData(url) {
            return $http({
                method: 'GET',
                url: url
            });
        }

        return {
            get: fetchData
        };
    });
})();
