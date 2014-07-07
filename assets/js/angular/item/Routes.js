/**
* ItemRoutes
*
* @author      :: Jeff Lee
* @created     :: 2014/07/06
*/

define(['angular', 'angularRoute'], function(angular) {
	'use strict';

	return angular.module('Item.routes', ['ngRoute'])

		.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
			$routeProvider.when('/game/:gameId/items', {
				templateUrl: '/js/angular/item/partials/index.html',
				controller: 'ItemController',
				needAuthentication: true
			});

			$locationProvider.html5Mode(true);
		}]);
});
