/**
* GameRoutes
*
* @author      :: Jeff Lee
* @created     :: 2014/04/24
*/

define(['angular', 'angularRoute'], function(angular) {
	'use strict';

	return angular.module('Game.routes', ['ngRoute'])

		.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
			$routeProvider.when('/games', {
				templateUrl: '/js/angular/game/partials/index.html',
				controller: 'GameController',
				needAuthentication: true
			});

			$routeProvider.otherwise({ redirectTo: '/games' });

			$locationProvider.html5Mode(true);
		}]);
});
