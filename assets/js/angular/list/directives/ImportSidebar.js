/**
 * ImportSidebar Directives
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/08/03
 */

define(['list/directives', 'list/Service'], function (listDirectives) {
    'use strict';

    return listDirectives

        .directive('importSidebar', ['lists', function (lists) {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '/js/angular/list/partials/import-sidebar.html',
                controller: ['$scope', function ($scope) {
                    $scope.import = function () {
                        // For Quizlet
                        $scope.list.desc = $scope.list.desc || $scope.list.description;

                        lists.create({
                            title: $scope.list.title,
                            desc: $scope.list.desc,
                            terms: $scope.list.terms,
                            oldListId: $scope.list.id
                        }, function (err, response) {
                            if (!err) {
                                $scope.list = response;
                                $scope.list.isOwner = true;
                            }
                        });
                    };
                }],
                link: function (scope, elem, attrs) {

                }
            };
        }]);
});
