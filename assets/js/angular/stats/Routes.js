/**
* StatsRoutes
*
* @author      :: Jeff Lee
* @created     :: 2014/05/08
*/

define(['angular', 'angularRoute'], function(angular) {
	'use strict';

	return angular.module('Stats.routes', ['ngRoute'])

		.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
			$routeProvider.when('/class/:id/overview', {
				templateUrl: '/js/angular/stats/partials/index.html',
				controller: 'StatsController',
				needAuthentication: true
			});

			$routeProvider.when('/class/:classId/student/:studentId', {
				templateUrl: '/js/angular/stats/partials/student.html',
				controller: 'StatsController',
				needAuthentication: true
			});

			$locationProvider.html5Mode(true);
		}]);
});
