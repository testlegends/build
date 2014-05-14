/**
 * QuestionController
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/05/08
 */

define(['angular', 'question/Service'], function (angular) {
	'use strict';

	return angular.module('Question.controllers', ['Question.services'])

		.controller('QuestionController', ['$scope', '$routeParams', 'questions', function ($scope, $routeParams, questions) {

            $scope.name = "QuestionController";

            $scope.sortableOptions = {
                update: function(e, ui) { },
                stop: function(e, ui) { }
            };

            $scope.questions = [];
            questions.list($routeParams.gameId, function (response) {
                $scope.questions = response.data;
            });

        }]);
});
