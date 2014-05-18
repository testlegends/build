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

        .directive('question', ['questions', 'QuestionSettings', function (questions, QuestionSettings) {
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
                        questions.save({
                            id: $scope.question.id,
                            difficulty: $scope.question.difficulty,
                            type: $scope.question.type,
                            content: $scope.question.content,
                            options: {
                                correct: $scope.question.options.correct,
                                wrong: $scope.question.options.wrong
                            }
                        }, function (response) {
                            // change the button to saved
                            console.log("Saved");
                        });
                    }, 5000), true);

                    $scope.addOption = function () {
                        $scope.question.options.wrong.push({ text: "" });
                    };

                    $scope.deleteQuestion = function () {
                        question.delete($scope.question.id, function (response) {
                            console.log(response.status);
                        });
                    };
                }]
            };
        }])

        .directive('qData', [function () {
            return {
                restrict: 'A',
                controller: function () {}
            };
        }])

        .directive('addQuestion', ['questions', 'QuestionSettings', function (questions, QuestionSettings) {
            return {
                restrict: 'E',
                replace: true,
                scope: true,
                templateUrl: '/js/angular/question/partials/addQuestion.html',
                controller: function ($scope) {
                    $scope.question_settings = QuestionSettings;
                    $scope.new_question = {
                        difficulty: 'easy',
                        type: 'multiple_choice'
                    };

                    $scope.addQuestion = function(){
                        questions.create({
                            difficulty: 'easy',
                            type: 'multiple_choice',
                            options: {
                                wrong: $scope.game.meta.default_options_per_question - 1
                            },
                            meta: {
                                gameId: $scope.game.id,
                                order: $scope.questions.length + 1
                            }
                        }, function (response) {
                            //var newQuestion = $compile("<question q-data='" + JSON.stringify(response.data) + "'></question>")($scope);
                            //$element.prev().append(newQuestion);
                            $scope.$parent.questions.push(response.data);
                        });
                    };
                }
            };
        }]);

});
