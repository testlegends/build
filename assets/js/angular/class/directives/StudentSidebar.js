/**
 * StudentSidebar Directives
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/08/31
 */

define(['class/directives', 'class/Service'], function (classDirectives) {
    'use strict';

    return classDirectives

        .directive('studentSidebar', ['classes', function (classes) {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '/js/angular/class/partials/student-sidebar.html',
                controller: ['$scope', function ($scope) {
                    $scope.inviteCodePopup = function () {
                        $('#inviteCodePopup').show();
                    };

                    $scope.statsPopup = function () {
                        $('#statsPopup').show();
                    };

                    $scope.closePopup = function (id) {
                        $('#' + id).hide();
                    };

                    $scope.addStudent = function () {
                        classes.addStudent({
                            classId: $scope.classId,
                            studentEmail: $scope.studentToAdd
                        }, function (err, data) {
                            $scope.students.push(data);
                        });
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
