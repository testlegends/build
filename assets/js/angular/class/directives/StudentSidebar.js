/**
 * StudentSidebar Directives
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/08/31
 */

define(['class/directives', 'class/Service', 'user/Service'], function (classDirectives) {
    'use strict';

    return classDirectives

        .directive('studentSidebar', ['classes', 'users', function (classes, users) {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '/js/angular/class/partials/student-sidebar.html',
                controller: ['$scope', function ($scope) {
                    $scope.addStudentPopup = function () {
                        $('#addStudentPopup').show();
                    };

                    $scope.statsPopup = function () {
                        $('#statsPopup').show();
                    };

                    $scope.closePopup = function (id) {
                        $('#' + id).hide();
                    };

                    $scope.removeStudent = function (id) {
                        classes.removeStudent({
                            classId: $scope.classId,
                            studentId: id
                        }, function (err, data) {
                            $scope.students = $scope.students.filter(function (student) {
                                return student.id !== id;
                            });
                        });
                    };

                    $scope.init = function () {
                        classes.getStudents($scope.classId, function (err, data) {
                            $scope.students = data;
                        });

                        $scope.newStudent = {};
                    };

                    $scope.init();
                }],
                link: function (scope, elem, attrs) {

                }
            };
        }]);
});
