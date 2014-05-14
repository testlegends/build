/**
 * QuestionDirective
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/05/13
 */

define(['question/directives'], function (questionDirectives) {
    'use strict';

    return questionDirectives

        .directive('question', [function () {
            return {
                restrict: 'E',
                replace: true,
                require: '^qData',
                templateUrl: '/js/angular/question/partials/question.html',
                scope: {
                    qData: '@'
                },
                controller: function ($scope) {
                    $scope.question = $.parseJSON($scope.qData);
                },
                link: function () {
                    $('select').select2();
                }
            };
        }])

        .directive('qData', [function () {
            return {
                restrict: 'A',
                controller: function () {}
            };
        }]);

});
