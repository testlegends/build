/**
 * TermController
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/07/06
 */

define(['angular', 'term/Service', 'list/Service', 'common/QuizletService'], function (angular) {
	'use strict';

	return angular.module('Term.controllers', ['Term.services', 'List.services', 'Common.services'])

		.controller('TermController', ['$scope', '$routeParams', 'terms', 'lists', 'quizlet', function ($scope, $routeParams, terms, lists, quizlet) {

			$scope.name = "TermController";

			$scope.listId = $routeParams.listId;

			quizlet.getSet($scope.listId, function (response) {
				$scope.list = response;
			});

			//TODO: put this from auth service
			$scope.loggedIn = function () {
				return true;
			};

			$scope.isCreator = function () {
				return false;
			};

			$scope.save = function () {
				lists.save({
					title: $scope.list.title,
					desc: $scope.list.description,
					terms: $scope.list.terms
				}, function (err, response) {
					if (!err) {
						$scope.saved = true;
						console.log(response);
					}
				});
			};

			$scope.generate = function () {
				if (!$scope.saved) {
					return false;
				}
			};
		}]);

});
