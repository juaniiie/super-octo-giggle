
var app = angular.module('MyBooks', ['ui.router', 'ngMaterial']);

app.config(function($stateProvider, $urlRouterProvider, $mdThemingProvider) {
    
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'HomeController',
            controllerAs: 'home'
        });

    $mdThemingProvider.theme('default')
        .primaryPalette('indigo')
        .accentPalette('orange', {
            'default': '50'
        })
        .warnPalette('pink', {
            'default': '900'
        });
});