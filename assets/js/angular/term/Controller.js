/**
 * TermController
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/07/06
 */

define(['angular', 'term/Service', 'list/Service', 'common/services/Auth', 'common/services/Quizlet', 'jqueryAutosize'], function (angular) {
	'use strict';

	return angular.module('Term.controllers', ['Term.services', 'List.services', 'Common.services'])

		.controller('TermController', ['$scope', '$routeParams', 'terms', 'lists', 'Auth', 'Quizlet', function ($scope, $routeParams, terms, lists, Auth, Quizlet) {

			$scope.save = function () {
				lists.save({
					id: $scope.listId,
					title: $scope.list.title,
					desc: $scope.list.desc,
					category: $scope.list.category,
					terms: $scope.list.terms
				}, function (err, response) {
					if (!err) {
						// TODO: show saved msg
					}
				});
			};

			$scope.addTerm = function () {
				$scope.list.terms.unshift({
					term: 'New Term',
					definition: 'Definition',
					options: []
				});
			};

			$scope.editTerm = function ($event) {
				$($event.currentTarget).siblings('textarea').show().focus();
				$($event.currentTarget).hide();
			};

			$scope.doneEditTerm = function ($event) {
				$($event.currentTarget).siblings('p').show().focus();
				$($event.currentTarget).hide();
			};

			$scope.removeTerm = function (term) {
				angular.forEach($scope.list.terms, function (value, key) {
					if (value.term === term) {
						$scope.list.terms.splice(key, 1);
					}
				});
			};

			$scope.editTitle = function ($event) {
				$($event.currentTarget).siblings('textarea').show().focus();
				$($event.currentTarget).hide();
			};

			$scope.doneEditTitle = function ($event) {
				$($event.currentTarget).siblings('h4').show().focus();
				$($event.currentTarget).hide();
			};

			$scope.changeCategory = function (category) {
				$scope.list.category = category;
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

					$scope.$watch('list', _.debounce(function () {
						if ($scope.list) {
							$scope.list.terms.forEach(function (element) {
								if (element.options_raw) {
									var options = element.options_raw.split(',').map(function (elem) { return elem.trim(); });
									element.term = options[0];
									element.options = options.slice(1, options.length);
								} else {
									element.options_raw = element.term + ',' + element.options.join();
								}
							});

							$scope.save();
						}
					}, 500), true);
				}
			};

			$scope.init();
		}]);

});
