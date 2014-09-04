/**
* ClassRoutes
*
* @author      :: Jeff Lee
* @created     :: 2014/08/21
*/

define(['angular', 'angularRoute'], function(angular) {
	'use strict';

	return angular.module('Class.routes', ['ngRoute'])

		.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
			$routeProvider.when('/class/:classId', {
				templateUrl: '/js/angular/class/partials/index.html',
				controller: 'ClassController',
				needAuthentication: true
			});

			$locationProvider.html5Mode(true);
		}]);
});
