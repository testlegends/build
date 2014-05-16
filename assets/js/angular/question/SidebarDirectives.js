/**
 * SidebarDirectives
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/05/09
 */

define(['question/directives'], function (questionDirectives) {
    'use strict';

    return questionDirectives

        .directive('stats', [function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '/js/angular/question/partials/stats.html',
                controller: function ($scope) {
                    // TODO maybe setinterval to retrieve data every minute or so
                }
            };
        }])

        .directive('master', [function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '/js/angular/question/partials/master.html',
                controller: function ($scope) {
                    // TODO save the master question settings
                }
            };
        }])

        .directive('gameOptions', [function () {
            return {
                restrict: 'E',
                //replace: true,
                templateUrl: '/js/angular/question/partials/gameOptions.html',
                controller: function ($scope) {
                    // TODO save the game options
                }
            };
        }]);
});
