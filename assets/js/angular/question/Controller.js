/**
 * QuestionController
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/05/08
 */

define(['angular', 'question/Service', 'game/Service', 'common/services/TestLegendsURL'], function (angular) {
	'use strict';

	return angular.module('Question.controllers', ['Question.services', 'Game.services', 'Common.services'])

		.controller('QuestionController', ['$scope', '$routeParams', 'questions', 'games', 'TestLegendsURL', function ($scope, $routeParams, questions, games, TestLegendsURL) {

            $scope.sortableOptions = {
                update: function(e, ui) { },
                stop: function(e, ui) { }
            };

            $scope.game = null;
            games.get($routeParams.gameId, function (err, data) {
                $scope.game = data;
            });

            $scope.questions = [];
            questions.list($routeParams.gameId, function (err, data) {
                $scope.questions = data;
            });

			$scope.play = function () {
				window.location.href = TestLegendsURL.app + '/game/' + $scope.game.id;
			};

        }]);
});
