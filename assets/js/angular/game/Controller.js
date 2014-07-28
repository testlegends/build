/**
 * GameController
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/04/24
 */

define(['angular', 'angularCookies', 'game/Service'], function (angular) {
	'use strict';

	return angular.module('Game.controllers', ['Game.services', 'ngCookies'])

		.controller('GameController', ['$scope', 'games', function ($scope, games) {

            $scope.name = "GameController";

            $scope.deleteGame = function (gameId) {
                games.delete(gameId, function (err, data) {
					$scope.games = $scope.games.filter(function (game) {
						return game.id !== gameId;
					});
                });
            };

            games.list(function (err, data) {
                $scope.games = data;
            });

		}]);
});
