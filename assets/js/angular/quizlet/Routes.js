/**
* QuizletRoutes
*
* @author      :: Jeff Lee
* @created     :: 2014/06/24
*/

define(['angular', 'angularRoute'], function(angular) {
    'use strict';

    return angular.module('Quizlet.routes', ['ngRoute'])

        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider.when('/quizlet', {
                templateUrl: '/js/angular/quizlet/partials/index.html',
                controller: 'QuizletController',
                needAuthentication: true
            });

            $routeProvider.when('/quizlet/:setId', {
                templateUrl: '/js/angular/quizlet/partials/set.html',
                controller: 'QuizletSetController',
                needAuthentication: true
            });

            $locationProvider.html5Mode(true);
        }]);
});
