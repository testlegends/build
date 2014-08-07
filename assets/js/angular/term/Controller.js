/**
 * TermController
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/07/06
 */

define(['angular', 'term/Service', 'list/Service', 'common/services/Auth', 'common/services/Quizlet'], function (angular) {
	'use strict';

	return angular.module('Term.controllers', ['Term.services', 'List.services', 'Common.services'])

		.controller('TermController', ['$scope', '$routeParams', 'terms', 'lists', 'Auth', 'Quizlet', function ($scope, $routeParams, terms, lists, Auth, Quizlet) {

			$scope.save = function () {
				lists.save({
					id: $scope.listId,
					title: $scope.list.title,
					desc: $scope.list.desc,
					terms: $scope.list.terms
				}, function (err, response) {
					if (!err) {
						// TODO: show saved msg
					}
				});
			};

			$scope.addTerm = function () {
				$scope.list.terms.push({
					term: '',
					definition: '',
					options: []
				});
			};

			$scope.removeTerm = function (term) {
				angular.forEach($scope.list.terms, function (value, key) {
					if (value.term === term) {
						$scope.list.terms.splice(key, 1);
					}
				});
			};

			$scope.init = function () {
				$scope.listId = $routeParams.listId;

				if (Quizlet.isQuizlet($scope.listId)) {
					Quizlet.getSet($scope.listId, function (err, data) {
						$scope.list = data;
						$scope.list.isOwner = false;
					});
				} else {
					lists.getList($scope.listId, function (err, data) {
						$scope.list = data;
						$scope.list.isOwner = data.meta.userId === Auth.user().id;
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
