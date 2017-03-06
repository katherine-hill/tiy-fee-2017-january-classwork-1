const app = angular.module('woofApp', ['ui.router', 'LocalStorageModule']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('woofParent', {
        url: '/',
        abstract: true,
        template: '<ui-view></ui-view>'
    }).state('woofParent.newWoof', {
        url: 'new-woof',
        controller: 'NewWoofController as newWoof',
        templateUrl: './templates/new.html'
    }).state('woofParent.listWoofs', {
        url: 'list-woofs?filter',
        controller: 'ListController as listCtrl',
        templateUrl: './templates/list.html'
    });

});
