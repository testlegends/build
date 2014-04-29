/**
 * MapController
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/04/28
 */

define(['angular'], function (angular) {
	'use strict';

	return angular.module('Map.controllers', [])

		.controller('MapController', ['$scope', function ($scope) {

            $scope.name = "MapController";

		}]);
});
