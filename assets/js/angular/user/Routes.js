/**
* UserRoutes
*
* @author      :: Jeff Lee
* @created     :: 2014/07/06
*/

define(['angular', 'angularRoute'], function(angular) {
	'use strict';

	return angular.module('User.routes', ['ngRoute'])

		.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
			$routeProvider.when('/user', {
				templateUrl: '/js/angular/user/partials/index.html',
				controller: 'UserController',
				needAuthentication: true
			});

			$locationProvider.html5Mode(true);
		}]);
});
