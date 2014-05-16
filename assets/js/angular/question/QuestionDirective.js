/**
 * QuestionDirective
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/05/13
 */

define(['question/directives', 'underscore'], function (questionDirectives) {
    'use strict';

    return questionDirectives

        .constant('QuestionSettings', {
            types: [
                { text: 'Multiple Choice', value: 'multiple_choice' },
                { text: 'Short Answer',    value: 'short_answer' },
                { text: 'Fill in Blank',   value: 'fill_blank' }
            ],
            difficulties: [
                { text: 'Hard',         value: 'hard' },
                { text: 'Intermediate', value: 'intermediate' },
                { text: 'Easy',         value: 'easy' }
            ]
        })

        .directive('question', ['QuestionSettings', function (QuestionSettings) {
            return {
                restrict: 'E',
                replace: true,
                require: '^qData',
                templateUrl: '/js/angular/question/partials/question.html',
                scope: {
                    qData: '@'
                },
                controller: ['$scope', function ($scope) {
                    $scope.question_settings = QuestionSettings;
                    $scope.question = $.parseJSON($scope.qData);

                    // TODO save question when change, throttle every 10 seconds or so
                    $scope.$watch('question', _.throttle(function(){
                        console.log("changed + saved");
                    }, 1000), true);
                }]
            };
        }])

        .directive('qData', [function () {
            return {
                restrict: 'A',
                controller: function () {}
            };
        }])

        .directive('addQuestion', ['$compile', 'questions', 'QuestionSettings', function ($compile, questions, QuestionSettings) {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '/js/angular/question/partials/addQuestion.html',
                controller: function ($scope, $element) {
                    $scope.question_settings = QuestionSettings;
                    $scope.new_question = {
                        difficulty: 'easy',
                        type: 'multiple_choice'
                    };

                    $scope.add = function(){
                        questions.create({
                            difficulty: 'easy',
                            type: 'multiple_choice',
                            meta: {
                                gameId: $scope.game.id,
                                order: $scope.questions.length + 1
                            }
                        }, function (response) {
                            //$scope.$parent.questions.push(response.data);
                            var newQuestion = $compile("<question q-data='" + JSON.stringify(response.data) + "'></question>")($scope);
                            $element.prev().append(newQuestion);
                        });
                    };
                }
            };
        }]);

});
