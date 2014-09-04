/**
 * StatsController
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/05/08
 */

define(['angular', 'stats/Service'], function (angular) {
	'use strict';

	return angular.module('Stats.controllers', ['Stats.services'])

		.controller('StatsController', ['$scope', 'stats', function ($scope, stats) {

		}]);
});
