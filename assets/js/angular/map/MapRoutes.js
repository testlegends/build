/**
* MapRoutes
*
* @author      :: Jeff Lee
* @created     :: 2014/04/28
*/

define(['angular', 'angularRoute'], function(angular) {
    'use strict';

    return angular.module('Map.routes', ['ngRoute'])

        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/map', {
                templateUrl: 'js/angular/map/partials/index.html',
                controller: 'MapController'
            });

            $routeProvider.otherwise({redirectTo: '/map'});

            //$locationProvider.html5Mode(true);
        }]);
});
