/**
 * PlaySidebar Directives
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/08/03
 */

define(['list/directives', 'list/Service', 'common/services/TestLegendsURL'], function (listDirectives) {
    'use strict';

    return listDirectives

        .directive('playSidebar', ['lists', 'TestLegendsURL', function (lists, TestLegendsURL) {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '/js/angular/list/partials/play-sidebar.html',
                controller: ['$scope', function ($scope) {
                    $scope.generateAndPlay = function () {
                        lists.generateGame({
                            listId: $scope.listId,
                            heroHealth: $scope.heroHealth || 5,
                            timer: $scope.timer || 20
                        }, function (err, data) {
                            window.location.href = TestLegendsURL.app + '/game/' + data.id;
                        });
                    };
                }],
                link: function (scope) {

                }
            };
        }]);
});
