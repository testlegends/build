/**
 * QuizletController
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/06/24
 */

define(['angular', 'angularCookies', 'quizlet/Service'], function (angular) {
	'use strict';

	return angular.module('Quizlet.controllers', ['Quizlet.services', 'ngCookies'])

		.controller('QuizletController', ['$scope', '$location', 'quizlet', function ($scope, $location, quizlet) {

            $scope.name = "QuizletController";

			$scope.search = function () {
				$location.search('q', $scope.search_params.q);
				quizlet.search($scope.search_params, function (response) {
					$scope.search_result = response.result;
					$scope.curr_page = 1;
				});
			};

			$scope.gotoPage = function (page) {
				if (page === 'prev') {
					return $scope.gotoPage($scope.curr_page - 1);
				} else if (page === 'next') {
					return $scope.gotoPage($scope.curr_page + 1);
				}

				if (page > $scope.search_result.pages) {
					return false;
				}

				$location.search({
					q: $scope.search_params.q,
					page: page
				});

				$scope.search_params.page = page;
				quizlet.search($scope.search_params, function (response) {
					$scope.search_result = response.result;
					$scope.curr_page = page;
				});

				return false;
			};

			// Should put this in a filter
			$scope.makeArray = function (num) {
				return new Array(num);
			};

			$scope.init = function () {
				var query = $location.search();
				if (query.q) {
					$scope.search_params = { q: query.q, page: query.page };
					$scope.search();
				}
			};

			$scope.init();
		}])

		.controller('QuizletSetController', ['$scope', '$routeParams', 'quizlet', function ($scope, $routeParams, quizlet) {

			$scope.name = "QuizletSetController";

			$scope.setId = $routeParams.setId;

			quizlet.getSet($scope.setId, function (response) {
				$scope.set = response;
			});

			$scope.save = function () {
				$scope.saved = true;
			};

			$scope.generate = function () {
				if (!$scope.saved) {
					return false;
				}
			};
		}]);
});
