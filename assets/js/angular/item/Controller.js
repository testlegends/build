/**
 * ItemController
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/07/06
 */

define(['angular', 'item/Service'], function (angular) {
	'use strict';

	return angular.module('Item.controllers', ['Item.services'])

		.controller('ItemController', ['$scope', 'items', function ($scope, items) {

            $scope.name = "ItemController";

		}]);
});
