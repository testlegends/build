/**
* ListRoutes
*
* @author      :: Jeff Lee
* @created     :: 2014/06/24
*/

define(['angular', 'angularRoute'], function(angular) {
    'use strict';

    return angular.module('List.routes', ['ngRoute'])

        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider.when('/', {
                templateUrl: '/js/angular/list/partials/search.html',
                controller: 'ListController',
                needAuthentication: false
            });

            $routeProvider.when('/lists', {
                templateUrl: '/js/angular/list/partials/lists.html',
                controller: 'ListController',
                needAuthentication: true
            });

            $routeProvider.otherwise({ redirectTo: '/' });

            $locationProvider.html5Mode(true);
        }]);
});
