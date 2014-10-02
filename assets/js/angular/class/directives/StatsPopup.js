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

                        var avgScore = $scope.classStats.totalGotRight / $scope.classStats.totalQuestions;
                        var complete = $scope.classStats.totalUniqQuestions / ($scope.classStats.totalLists * 8);
                        if (avgScore < complete) $scope.scorePieChartValues = avgScore + "," + (complete - avgScore) + "," + (1 - complete);
                        else $scope.scorePieChartValues = complete + "," + (avgScore - complete) + "," + (1 - avgScore);

                        $scope.timePieChartValues = $scope.classStats.shortestTime + "," +
                            ($scope.classStats.totalTime / $scope.classStats.totalQuestions - $scope.classStats.shortestTime) + "," +
                            ($scope.classStats.longestTime - $scope.classStats.totalTime / $scope.classStats.totalQuestions) + "," +
                            (20 - $scope.classStats.longestTime);
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
