/**
* ThemeRoutes
*
* @author      :: Jeff Lee
* @created     :: 2014/05/08
*/

define(['angular', 'angularRoute'], function(angular) {
	'use strict';

	return angular.module('Theme.routes', ['ngRoute'])

		.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
			$routeProvider.when('/themes', {
				templateUrl: '/js/angular/theme/partials/index.html',
				controller: 'ThemeController',
				needAuthentication: true
			});

			$locationProvider.html5Mode(true);
		}]);
});
