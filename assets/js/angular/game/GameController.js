/**
 * GameController
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/04/24
 */

define(['angular', 'game/GameService'], function (angular) {
	'use strict';

	return angular.module('Game.controllers', ['Game.services'])

		.controller('GameController', ['$scope', 'games', function ($scope, games) {
            $scope.name = "GameController";

		}]);
});
