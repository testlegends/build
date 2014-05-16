/**
 * QuestionController
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/05/08
 */

define(['angular', 'question/Service', 'game/Service'], function (angular) {
	'use strict';

	return angular.module('Question.controllers', ['Question.services', 'Game.services'])

		.controller('QuestionController', ['$scope', '$routeParams', 'questions', 'games', function ($scope, $routeParams, questions, games) {

            $scope.name = "QuestionController";

            $scope.sortableOptions = {
                update: function(e, ui) { },
                stop: function(e, ui) { }
            };

            $scope.game = null;
            games.get($routeParams.gameId, function (response) {
                $scope.game = response.data;
            });

            $scope.questions = [];
            questions.list($routeParams.gameId, function (response) {
                $scope.questions = response.data;
            });

        }]);
});
