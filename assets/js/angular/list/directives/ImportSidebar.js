/**
 * ImportSidebar Directives
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/08/03
 */

define(['list/directives', 'list/Service', 'common/services/Quizlet'], function (listDirectives) {
    'use strict';

    return listDirectives

        .directive('importSidebar', ['lists', 'Quizlet', function (lists, Quizlet) {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '/js/angular/list/partials/import-sidebar.html',
                controller: ['$scope', function ($scope) {
                    $scope.categories = ['geography', 'language', 'history', 'science', 'math', 'other']

                    $scope.import = function () {
                        if ($scope.list) {
                            $scope.importData($scope.list);
                        } else {
                            $scope.importById($scope.selectedList);
                        }
                    };

                    $scope.importById = function (ids) {
                        ids.forEach(function (id) {
                            Quizlet.getSet(id, function (err, data) {
                                $scope.importData(data);
                            });
                        });
                    };

                    $scope.importData = function (list) {
                        // For Quizlet
                        list.desc = list.desc || list.description;

                        lists.create({
                            title: list.title,
                            desc: list.desc,
                            terms: list.terms,
                            category: $scope.category,
                            oldListId: list.id
                        }, function (err, response) {
                            if (!err) {
                                window.location.href = "/";
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
