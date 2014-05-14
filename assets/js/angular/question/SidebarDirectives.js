/**
 * SidebarDirectives
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/05/09
 */

define(['question/directives'], function (questionDirectives) {
    'use strict';

    return questionDirectives

        .directive('addQuestion', [function () {

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
