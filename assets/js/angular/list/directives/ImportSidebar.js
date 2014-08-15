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
                    $scope.categories = ['geography', 'language', 'history', 'science', 'math', 'other']

                    $scope.import = function () {
                        // For Quizlet
                        $scope.list.desc = $scope.list.desc || $scope.list.description;

                        lists.create({
                            title: $scope.list.title,
                            desc: $scope.list.desc,
                            terms: $scope.list.terms,
                            category: $scope.category,
                            oldListId: $scope.list.id
                        }, function (err, response) {
                            if (!err) {
                                window.location.href = "/list/" + response.id;
                            }
                        });
                    };

                    $scope.selectCategory = function (category, $event) {
                        $scope.category = category;
                        $('.icon-selected').removeClass('icon-selected');
                        $($event.currentTarget).addClass('icon-selected');
                    };

                    $scope.category = 'other';
                }],
                link: function (scope, elem, attrs) {
                    if (attrs.disable === "true") {
                        $('.sidebar').addClass('sidebar-disabled');
                    }
                }
            };
        }]);
});
