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

            $scope.delete = function (gameId) {
                games.delete(gameId, function (response) {

                });
            };

            games.list(function (response) {
                $scope.games = response.data;
            });

		}]);
});