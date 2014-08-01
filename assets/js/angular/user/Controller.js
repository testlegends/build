/**
 * UserController
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/07/06
 */

define(['angular', 'user/Service', 'common/services/Auth'], function (angular) {
	'use strict';

	return angular.module('User.controllers', ['User.services', 'Common.services'])

		.controller('UserController', ['$scope', '$route', 'user', 'Auth', function ($scope, $route, user, Auth) {

            $scope.name = "UserController";

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
