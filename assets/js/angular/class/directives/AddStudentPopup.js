/**
 * AddStudentPopup Directives
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/09/13
 */

define(['class/directives', 'class/Service'], function (listDirectives) {
    'use strict';

    return listDirectives

        .directive('addStudentPopup', ['classes', function (classes) {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '/js/angular/class/partials/add-student-popup.html',
                controller: ['$scope', function ($scope) {

                }],
                link: function (scope) {

                }
            };
        }]);
});
