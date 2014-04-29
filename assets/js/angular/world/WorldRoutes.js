/**
* WorldRoutes
*
* @author      :: Jeff Lee
* @created     :: 2014/04/28
*/

define(['angular', 'angularRoute'], function(angular) {
    'use strict';

    return angular.module('World.routes', ['ngRoute'])

        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/world', {
                templateUrl: 'js/angular/world/partials/index.html',
                controller: 'WorldController'
            });

            //$locationProvider.html5Mode(true);
        }]);
});
