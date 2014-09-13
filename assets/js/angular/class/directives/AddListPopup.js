/**
 * AddListPopup Directives
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/09/04
 */

define(['class/directives', 'class/Service', 'list/Service'], function (listDirectives) {
    'use strict';

    return listDirectives

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
                link: function (scope, elem, attrs) {

                }
            };
        }]);
});
