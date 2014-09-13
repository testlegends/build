/**
 * AddClassPopup Directives
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/09/05
 */

define(['class/directives', 'class/Service'], function (listDirectives) {
    'use strict';

    return listDirectives

        .directive('addClassPopup', ['classes', function (classes) {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '/js/angular/class/partials/add-class-popup.html',
                controller: ['$scope', function ($scope) {
                    $scope.addClass = function () {
                        classes.addClass($scope.newClass, function (err, data) {
                            $scope.classes.push(data);
                            $scope.newClass = {};
                            $scope.newClass.selectedClassList = [];
                            $('#addClassPopup').hide();
                        });
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
                    };

                    $scope.init();
                }],
                link: function (scope, elem, attrs) {

                }
            };
        }]);
});
