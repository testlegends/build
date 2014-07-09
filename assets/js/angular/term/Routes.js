/**
* TermRoutes
*
* @author      :: Jeff Lee
* @created     :: 2014/07/06
*/

define(['angular', 'angularRoute'], function(angular) {
	'use strict';

	return angular.module('Term.routes', ['ngRoute'])

		.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
			$routeProvider.when('/list/:listId', {
				templateUrl: '/js/angular/term/partials/index.html',
				controller: 'TermController',
				needAuthentication: false
			});

			$routeProvider.when('/list/:listId/edit', {
				templateUrl: '/js/angular/term/partials/edit.html',
				controller: 'TermController',
				needAuthentication: true
			});

			$locationProvider.html5Mode(true);
		}]);
});
