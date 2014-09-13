/**
 * UserController
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/07/06
 */

define(['angular', 'common/services/Auth'], function (angular) {
	'use strict';

	return angular.module('User.controllers', ['Common.services'])

		.controller('UserController', ['$scope', '$route', 'Auth', function ($scope, $route, Auth) {

			$scope.login = function () {
				if (Auth.user()) {
					Auth.login(true);
				} else {
					Auth.login();
				}
			};

			$scope.logout = function () {
				Auth.logout();
			};

			$scope.init = function () {
				if ($route.current.action) {
					$scope[$route.current.action]();
				}
			};

			$scope.init();
		}]);
});
