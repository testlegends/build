/**
* GameRoutes
*
* @author      :: Jeff Lee
* @created     :: 2014/04/24
*/

define(['angular', 'game/app'], function(angular, app) {
	'use strict';

	return app.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/games', {
			templateUrl: 'js/angular/game/partials/index.html',
			controller: 'GameController'
		});
		$routeProvider.otherwise({redirectTo: '/games'});
	}]);
});
