/**
 * UserController
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/07/06
 */

define(['angular', 'user/Service'], function (angular) {
	'use strict';

	return angular.module('User.controllers', ['User.services'])

		.controller('UserController', ['$scope', 'user', function ($scope, user) {

            $scope.name = "UserController";

		}]);
});
