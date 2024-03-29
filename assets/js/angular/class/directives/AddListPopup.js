/**
 * AddListPopup Directive
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/09/04
 */

define(['class/directives', 'class/Service', 'list/Service'], function (classDirectives) {
    'use strict';

    return classDirectives

        .directive('addListPopup', ['classes', 'lists', function (classes, lists) {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '/js/angular/class/partials/add-list-popup.html',
                controller: ['$scope', function ($scope) {
                    $scope.addLists = function () {
                        classes.addLists({
                            classId: $scope.classId,
                            listIds: $scope.selectedClassLists
                        }, function (err, data) {
                            if (err) {

                            } else {
                                $('#addListPopup').hide();
                                data.forEach(function (list) {
                                    $scope.lists.push(list);
                                });
                                $scope.addListPopupInit();
                            }
                        });
                    };

                    $scope.selectClassList = function (id) {
                        var index = $scope.selectedClassLists.indexOf(id);
                        if (index === -1) {
                            $scope.selectedClassLists.push(id);
                            $('#list-' + id).addClass('classListSelected');
                        } else {
                            $scope.selectedClassLists.splice(index, 1);
                            $('#list-' + id).removeClass('classListSelected');
                        }

                        return false;
                    };

                    $scope.addListPopupInit = function () {
                        $scope.selectedClassLists = [];

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

                        // Hack: wait until $scope.lists is ready
                        setTimeout(function(){
                            lists.getLists(function (err, data) {
                                $scope.allLists = data.filter(function (list) {
                                    var inClass = false;
                                    for (var i = 0; i < $scope.lists.length; i++) {
                                        if ($scope.lists[i].id === list.id) {
                                            inClass = true;
                                        }
                                    }
                                    return !inClass;
                                });
                            });
                        }, 1000);
                    };

                    $scope.addListPopupInit();
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
