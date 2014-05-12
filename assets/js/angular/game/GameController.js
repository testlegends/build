/**
 * GameController
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/04/24
 */

define(['angular', 'angularCookies', 'game/GameService'], function (angular) {
	'use strict';

	return angular.module('Game.controllers', ['Game.services', 'ngCookies'])

		.controller('GameController', ['$scope', 'games', function ($scope, games) {

            $scope.name = "GameController";

            games.list(function(data){
                $scope.games = data;
            });

		}]);
});
