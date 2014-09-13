/**
 * InviteCodePopup Directives
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/09/04
 */

define(['class/directives', 'class/Service'], function (listDirectives) {
    'use strict';

    return listDirectives

        .directive('inviteCodePopup', ['classes', function (classes) {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '/js/angular/class/partials/invite-code-popup.html',
                controller: ['$scope', function ($scope) {

                }],
                link: function (scope, elem, attrs) {

                }
            };
        }]);
});
