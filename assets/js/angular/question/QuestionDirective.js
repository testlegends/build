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
                templateUrl: '/js/angular/question/partials/elem-question.html',
                scope: {
                    qData: '@'
                },
                controller: ['$scope', function ($scope) {
                    $scope.question_settings = QuestionSettings;
                    $scope.question = $.parseJSON($scope.qData);

                    $scope.$watch('question', _.debounce(function(){
                        $scope.save();
                    }, 500), true);

                    $scope.save = function () {
                        questions.save({
                            id: $scope.question.id,
                            difficulty: $scope.question.difficulty,
                            type: $scope.question.type,
                            content: $scope.question.content,
                            options: {
                                correct: $scope.question.options.correct,
                                wrong: $scope.question.options.wrong
                            }
                        }, function (err, data) {
                            // change the button to saved
                            console.log("Saved");
                        });
                    };

                    $scope.addOption = function () {
                        $scope.question.options.wrong.push({ text: "" });
                    };

                    $scope.deleteQuestion = function () {
                        questions.delete($scope.question.id, function (err, data) {
                            console.log('Deleted');
                        });
                    };
                }]
            };
        }])

        .directive('qData', [function () {
            return {
                restrict: 'A',
                controller: [function () {

                }]
            };
        }])

        .directive('addQuestion', ['questions', 'QuestionSettings', function (questions, QuestionSettings) {
            return {
                restrict: 'E',
                replace: true,
                scope: true,
                templateUrl: '/js/angular/question/partials/elem-addQuestion.html',
                controller: ['$scope', function ($scope) {
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
                        }, function (err, data) {
                            //var newQuestion = $compile("<question q-data='" + JSON.stringify(response.data) + "'></question>")($scope);
                            //$element.prev().append(newQuestion);
                            $scope.$parent.questions.push(data);
                        });
                    };
                }]
            };
        }]);

});
