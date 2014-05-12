/**
 * QuestionDirectives
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/05/09
 */

define(['angular'], function (angular) {
    'use strict';

    return angular.module('Question.directives', [])

        .directive('question', [function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '/js/angular/question/partials/question.html'
            };
        }])

        .directive('addQuestion', ['$compile', function ($compile) {

        }])

        .directive('stats', [function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '/js/angular/question/partials/stats.html'
            };
        }])

        .directive('master', [function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '/js/angular/question/partials/master.html'
            };
        }])

        .directive('gameOptions', [function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '/js/angular/question/partials/gameOptions.html'
            };
        }]);
});
