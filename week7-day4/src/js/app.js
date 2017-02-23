(function() {
    angular.module('MoviesApp', ['ui.router']);

    angular.module('MoviesApp').config(function($stateProvider, $urlRouterProvider) {
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
