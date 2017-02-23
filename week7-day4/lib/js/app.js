'use strict';

(function () {
    angular.module('MoviesApp', ['ui.router']);

    angular.module('MoviesApp').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('MoviesParent', {
            url: '/',
            abstract: true,
            template: '<ui-view></ui-view>'
        }).state('MoviesParent.index', {
            url: '',
            templateUrl: './templates/home.html'
        }).state('MoviesParent.list', {
            url: 'movie-list',
            templateUrl: './templates/movie-list.html',
            controller: 'ListController as listCtrl'
        }).state('MoviesParent.details', {
            url: 'movie-details/:id',
            templateUrl: './templates/movie-details.html',
            controller: 'DetailsController as detailsCtrl'
        });
    });
})();
'use strict';

(function () {
    angular.module('MoviesApp').controller('DetailsController', function ($stateParams, $q, GetDataService) {
        var _this = this;

        var movieId = $stateParams.id;
        $q.when(GetDataService.get('./src/data/movies.json')).then(function (response) {
            var allMovies = response.data;
            allMovies.forEach(function (movie) {
                if (movie.imdb === movieId) {
                    _this.movie = movie;
                }
            });
            console.log(_this.selectedMovie);
        }).catch(function (error) {
            console.log(error);
        });
    });
})();
'use strict';

(function () {
    angular.module('MoviesApp').controller('ListController', function ($q, GetDataService) {
        var _this = this;

        $q.when(GetDataService.get('./src/data/movies.json')).then(function (response) {
            _this.allMovies = response.data;
            console.log(_this.allMovies);
        }).catch(function (error) {
            console.log(error);
        });
    });
})();
'use strict';

(function () {
    angular.module('MoviesApp').service('GetDataService', function ($http) {
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