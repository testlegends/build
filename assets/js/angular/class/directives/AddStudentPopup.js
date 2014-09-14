/**
 * AddStudentPopup Directives
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/09/13
 */

define(['class/directives', 'toastr', 'class/Service', 'common/services/TestLegendsURL'], function (listDirectives, toastr) {
    'use strict';

    return listDirectives

        .directive('addStudentPopup', ['classes', 'TestLegendsURL', '$http', function (classes, TestLegendsURL, $http) {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '/js/angular/class/partials/add-student-popup.html',
                controller: ['$scope', function ($scope) {
                    $scope.addStudent = function () {
                        classes.addStudent({
                            classId: $scope.classId,
                            studentEmail: $scope.newStudent.email
                        }, function (err, data) {
                            var email = $scope.newStudent.email;

                            if (err) {
                                $http.post(TestLegendsURL.home + '/invite', {
                                    classId: $scope.classId,
                                    email: email
                                }).success(function (response) {
                                    toastr.warning('Sutdent not registered.  An invite e-mail has been sent.');
                                });
                            } else {
                                $scope.students.push(data);
                                toastr.success('Successfully added student to class');
                            }

                            $scope.newStudent = {};
                            $('#addStudentPopup').hide();
                        });
                    };

                    $scope.newStudent = {};
                }],
                link: function (scope) {
                    $(document).keyup(function(e){
                        if (e.which === 27) { // ESC
                            $('.popup-block').hide();
                        }
                    }).mousedown(function(e){
                        var clicked = $(e.target);
                        if (!clicked.hasClass('box') && !clicked.parents().hasClass('box')) {
                            $('.popup-block').hide();
                        }
                    });
                }
            };
        }]);
});
