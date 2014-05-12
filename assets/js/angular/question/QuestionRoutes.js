/**
* QuestionRoutes
*
* @author      :: Jeff Lee
* @created     :: 2014/05/08
*/

define(['angular', 'angularRoute'], function(angular) {
    'use strict';

    return angular.module('Question.routes', ['ngRoute'])

        .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
            $routeProvider.when('/questions', {
                templateUrl: 'js/angular/question/partials/index.html',
                controller: 'QuestionController',
                needAuthentication: true
            });

            $locationProvider.html5Mode(true);
        }]);
});
