/**
 * ThemeController
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/05/08
 */

define(['angular', 'theme/ThemeService'], function (angular) {
	'use strict';

	return angular.module('Theme.controllers', ['Theme.services'])

		.controller('ThemeController', ['$scope', 'themes', function ($scope, themes) {

            $scope.name = "ThemeController";

		}]);
});
