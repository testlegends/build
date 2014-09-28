/**
 * StatsPopup Directive
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/09/04
 */

define(['class/directives', 'class/Service'], function (classDirectives) {
    'use strict';

    return classDirectives

        .directive('statsPopup', ['classes', function (classes) {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '/js/angular/class/partials/stats-popup.html',
                controller: ['$scope', function ($scope) {
                    classes.getClassStats($scope.classId, function (err, data) {
                        $scope.classStats = data;
                    });
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
