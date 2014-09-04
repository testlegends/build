/**
 * ClassSidebar Directives
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/08/30
 */

define(['class/directives', 'class/Service'], function (listDirectives) {
    'use strict';

    return listDirectives

        .directive('classSidebar', ['classes', '$window', function (classes, $window) {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '/js/angular/class/partials/class-sidebar.html',
                controller: ['$scope', function ($scope) {
                    $scope.addClassPopup = function () {

                    };

                    $scope.addClass = function () {
                        classes.addClass($scope.newClass, function (err, data) {
                            $scope.classes.push(data);
                            $scope.newClass = {}
                        });
                    };

                    $scope.selectClass = function (id) {
                        var index = $scope.selectedClass.indexOf(id);
                        if (index === -1) {
                            $scope.selectedClass.push(id);
                            $('#class-' + id).addClass('classSelected');
                        } else {
                            $scope.selectedClass.splice(index, 1);
                            $('#class-' + id).removeClass('classSelected');
                        }

                        return false;
                    };

                    $scope.addToClass = function () {
                        $scope.selectedList.forEach(function (listId) {
                            $scope.selectedClass.forEach(function (classId) {
                                classes.addList({
                                    classId: classId,
                                    listId: listId
                                }, function (err, data) {
                                    // TODO: unselect lists and classes, change back to normal class view
                                });
                            });
                        });
                    };

                    $scope.showInviteCode = function (id) {
                        $window.alert(id);
                    };

                    $scope.joinClass = function () {
                        classes.addStudent({
                            classId: $scope.classToJoin
                        }, function (err, data) {
                            if (err) {
                                console.log(err);
                                return;
                            }

                            classes.findClass($scope.classToJoin, function (err, data) {
                                $scope.classes.push(data);
                            });
                        });
                    };

                    $scope.init = function () {
                        classes.getClasses(function (err, data) {
                            $scope.classes = data;
                        });

                        $scope.selectedClass = [];
                    };

                    $scope.init();
                }],
                link: function (scope, elem, attrs) {

                }
            };
        }]);
});
