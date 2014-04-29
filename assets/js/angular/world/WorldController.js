/**
 * WorldController
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/04/28
 */

define(['angular'], function (angular) {
	'use strict';

	return angular.module('World.controllers', [])

		.controller('WorldController', ['$scope', function ($scope) {

            $scope.name = "WorldController";

		}]);
});
