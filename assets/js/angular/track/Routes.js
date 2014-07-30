/**
* TrackRoutes
*
* @author      :: Jeff Lee
* @created     :: 2014/05/08
*/

define(['angular', 'angularRoute'], function(angular) {
	'use strict';

	return angular.module('Track.routes', ['ngRoute'])

		.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
			$routeProvider.when('/track', {
				templateUrl: '/js/angular/track/partials/index.html',
				controller: 'TrackController',
				needAuthentication: true
			});

			$locationProvider.html5Mode(true);
		}]);
});
