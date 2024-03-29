/**
 * AddClassPopup Directive
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/09/05
 */

define(['class/directives', 'toastr', 'class/Service'], function (classDirectives, toastr) {
    'use strict';

    return classDirectives

        .directive('addClassPopup', ['classes', function (classes) {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '/js/angular/class/partials/add-class-popup.html',
                controller: ['$scope', function ($scope) {
                    $scope.addClass = function () {
                        if ($scope.newClass.name.length === 0) {
                            toastr.error('Please enter a name for class');
                        } else {
                            classes.addClass($scope.newClass, function (err, data) {
                                $scope.classes.push(data);
                                $scope.newClass = {};
                                $scope.newClass.selectedClassList = [];
                                $('#addClassPopup').hide();
                                toastr.success('Class ' + data.name + ' is created successfully!');
                            });
                        }
                    };

                    $scope.selectClassList = function (id) {
                        var index = $scope.newClass.selectedClassList.indexOf(id);
                        if (index === -1) {
                            $scope.newClass.selectedClassList.push(id);
                            $('#list-' + id).addClass('classListSelected');
                        } else {
                            $scope.newClass.selectedClassList.splice(index, 1);
                            $('#list-' + id).removeClass('classListSelected');
                        }

                        return false;
                    };

                    $scope.init = function () {
                        $scope.newClass = {};
                        $scope.newClass.selectedClassList = [];

                        $scope.classListOrder = 'alpha';
                        $scope.$watch('classListOrder', function (value) {
                            if (!value) { return; }

                            var orders = {
                                alpha: { predicate: 'title', reverse: false },
                                alphaReverse: { predicate: 'title', reverse: true },
                                date: { predicate: 'createdAt', reverse: false },
                                dateReverse: { predicate: 'createdAt', reverse: true }
                            };

                            $scope.classListPredicate = orders[value].predicate;
                            $scope.classListReverse = orders[value].reverse;
                        });
                    };

                    $scope.init();
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
