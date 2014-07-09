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

			$scope.login = function () {
				Auth.login();
			};

			$scope.loggedIn = function () {
				return Auth.isAuthenticated() && Auth.isAuthorized();
			};

			$scope.isCreator = function (listId) {
				return false;
			};

			$scope.create = function () {
				// For Quizlet
				$scope.list.desc = $scope.list.desc || $scope.list.description;

				lists.create({
					title: $scope.list.title,
					desc: $scope.list.desc,
					terms: $scope.list.terms
				}, function (err, response) {
					if (!err) {
						$scope.saved = true;
					}
				});
			};

			$scope.save = function () {
				lists.save({
					id: $scope.listId,
					title: $scope.list.title,
					desc: $scope.list.desc,
					terms: $scope.list.terms
				}, function (err, response) {
					if (!err) {
						$scope.saved = true;
					}
				});
			};

			$scope.addTerm = function () {
				$scope.list.terms.push({
					term: '',
					definition: ''
				});
			};

			$scope.generate = function () {
				if (!$scope.saved) {
					return false;
				}
			};

			$scope.init = function () {
				$scope.listId = $routeParams.listId;

				/** HACK: Assumes Quizlet set id is all number and TestLegends list id contains string */
				if (isNaN($scope.listId)) {
					lists.getList($scope.listId, function (err, data) {
						$scope.list = data;
					});
				} else {
					Quizlet.getSet($scope.listId, function (err, data) {
						$scope.list = data;
					});
				}

				$scope.$watch('list', _.debounce(function () {
					if ($scope.list) {
						$scope.save();
					}
				}, 300), true);
			};

			$scope.init();
		}]);

});
