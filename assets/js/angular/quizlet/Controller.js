/**
 * QuizletController
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/06/24
 */

define(['angular', 'angularCookies', 'quizlet/Service'], function (angular) {
	'use strict';

	return angular.module('Quizlet.controllers', ['Quizlet.services', 'ngCookies'])

		.controller('QuizletController', ['$scope', 'quizlet', function ($scope, quizlet) {

            $scope.name = "QuizletController";

			$scope.search = function () {
				quizlet.search($scope.search_params, function (response) {
					$scope.search_result = response.result;
				});
			};

			$scope.authCheck = function () {
				quizlet.loggedIn(function (result) {
					if (!result.loggedIn) {
						window.location = '/quizlet/login';
					}
				});
			};

			$scope.authCheck();
		}]);
});
