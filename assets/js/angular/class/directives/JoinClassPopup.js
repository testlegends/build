/**
 * JoinClassPopup Directive
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/09/04
 */

define(['class/directives', 'class/Service'], function (classDirectives) {
    'use strict';

    return classDirectives

        .directive('joinClassPopup', ['classes', function (classes) {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '/js/angular/class/partials/join-class-popup.html',
                controller: ['$scope', function ($scope) {
                    $scope.joinClass = function () {
                        classes.addStudent({
                            classId: $scope.classToJoin.id
                        }, function (err, data) {
                            if (err) {
                                console.log(err);
                                return;
                            }

                            classes.findClass($scope.inviteCode, function (err, data) {
                                $scope.classes.push(data);

                                $scope.closePopup('joinClassPopup');
                                $scope.classToJoin = {};
                                $scope.inviteCode = '';
                            });
                        });
                    };
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
