/**
 * TermController
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/07/06
 */

define(['angular', 'term/Service', 'list/Service', 'common/AuthService', 'common/QuizletService'], function (angular) {
	'use strict';

	return angular.module('Term.controllers', ['Term.services', 'List.services', 'Common.services'])

		.controller('TermController', ['$scope', '$routeParams', 'terms', 'lists', 'Auth', 'Quizlet', function ($scope, $routeParams, terms, lists, Auth, Quizlet) {

			$scope.name = "TermController";

			$scope.listId = $routeParams.listId;

			Quizlet.getSet($scope.listId, function (err, data) {
				$scope.list = data;
			});

			$scope.login = function () {
				Auth.login();
			};

			$scope.loggedIn = function () {
				return Auth.isAuthenticated() && Auth.isAuthorized();
			};

			$scope.isCreator = function (listId) {
				console.log(listId);
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
