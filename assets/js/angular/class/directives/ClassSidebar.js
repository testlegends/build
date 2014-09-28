/**
 * ClassSidebar Directive
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/08/30
 */

define(['class/directives', 'toastr', 'class/Service', 'user/Service'], function (classDirectives, toastr) {
    'use strict';

    return classDirectives

        .directive('classSidebar', ['classes', 'users', function (classes, users) {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '/js/angular/class/partials/class-sidebar.html',
                controller: ['$scope', function ($scope) {
                    $scope.addClassPopup = function () {
                        $('#addClassPopup').show();
                    };

                    $scope.joinClassPopup = function () {
                        classes.findClass($scope.inviteCode, function (err, data) {
                            if (err) {
                                toastr.error(err);
                            } else {
                                $scope.classToJoin = data;
                                users.getUser(data.meta.userId, function (err, user) {
                                    $scope.classToJoin.classOwner = user;
                                });
                                $('#joinClassPopup').show();
                            }
                        });
                    };

                    $scope.closePopup = function (id) {
                        $('#' + id).hide();
                    };

                    $scope.selectClass = function (id) {
                        if ($scope.selectedClass[0] === id) {
                            $('#class-' + id).removeClass('classSelected');
                            $scope.selectedClass = [];
                        } else {
                            $('#class-' + $scope.selectedClass[0]).removeClass('classSelected');
                            $('#class-' + id).addClass('classSelected');
                            $scope.selectedClass = [id];
                        }

                        // var index = $scope.selectedClass.indexOf(id);
                        // if (index === -1) {
                        //     $scope.selectedClass.push(id);
                        //     $('#class-' + id).addClass('classSelected');
                        // } else {
                        //     $scope.selectedClass.splice(index, 1);
                        //     $('#class-' + id).removeClass('classSelected');
                        // }

                        return false;
                    };

                    $scope.addToClass = function () {
                        if ($scope.selectedClass.length === 0) {
                            toastr.error('You need to create and select one class to add to.');
                            return false;
                        }

                        classes.addLists({
                            classId: $scope.selectedClass[0],
                            listIds: $scope.selectedList
                        }, function (err, data) {
                            toastr.success("Study Sets successfully added to class!");

                            $scope.selectedList.forEach(function (lid) {
                                $('#studySet-' + lid).removeClass('studySetSelected');
                                $('#select-set-' + lid).prop("checked", false);
                            });

                            $scope.selectedClass.forEach(function (cid) {
                                $('#class-' + cid).removeClass('classSelected');
                            });

                            $('.addClass').show();
                            $('.addToClass').hide();

                            $scope.selectedClass = [];
                            $scope.selectedList = [];
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
