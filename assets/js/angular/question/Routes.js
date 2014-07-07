/**
* QuestionRoutes
*
* @author      :: Jeff Lee
* @created     :: 2014/05/08
*/

define(['angular', 'angularRoute'], function(angular) {
    'use strict';

    return angular.module('Question.routes', ['ngRoute'])

        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider.when('/game/:gameId/questions', {
                templateUrl: '/js/angular/question/partials/index.html',
                controller: 'QuestionController',
                needAuthentication: true
            });

            $routeProvider.when('/game/:gameId/questions/edit', {
                templateUrl: '/js/angular/question/partials/edit.html',
                controller: 'QuestionController',
                needAuthentication: true
            });

            $locationProvider.html5Mode(true);
        }]);
});
