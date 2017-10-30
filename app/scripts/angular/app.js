'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {templateUrl: '/views/demo/welcome.html', controller: 'WelcomeCtrl'})
        .when('/db_query_demo', {templateUrl: '/views/demo/welcome.html', controller: 'DbQueryCtrl'})
        .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
}]);