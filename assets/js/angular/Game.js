/**
* Game
*
* @author      :: Jeff Lee
* @created     :: 2014/04/24
*/

require.config({
	paths: {
		angular: '../vendor/angular/angular',
		angularRoute: '../vendor/angular-route/angular-route',
		angularLoadingBar: '../vendor/angular-loading-bar/build/loading-bar'
	},
	shim: {
		'angular': { 'exports': 'angular' },
		'angularRoute': ['angular'],
		'angularLoadingBar': ['angular']
	},
	priority: ['angular']
});

require([
	'angular',
	'game/app'
], function (angular, app) {
	'use strict';

	angular.element(document).ready(function () {
		angular.bootstrap(document, [app.name]);
	});
});
