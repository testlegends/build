/**
 * TermController
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/07/06
 */

define(['angular', 'term/Service', 'list/Service', 'user/Service', 'common/services/Quizlet', 'jqueryAutosize'], function (angular) {
	'use strict';

	return angular.module('Term.controllers', ['Term.services', 'List.services', 'User.services', 'Common.services'])

		.controller('TermController', ['$scope', '$routeParams', 'terms', 'lists', 'users', 'Quizlet', function ($scope, $routeParams, terms, lists, users, Quizlet) {

			$scope.save = function () {
				lists.save({
					id: $scope.listId,
					title: $scope.list.title,
					desc: $scope.list.desc,
					category: $scope.list.category,
					terms: $scope.list.terms
				}, function (err, data) {
					if (!err) {
						// TODO: show saved msg
					}
				});
			};

			$scope.saveList = function () {
				lists.create({
					title: $scope.list.title,
					desc: $scope.list.desc,
					category: $scope.list.category,
					terms: $scope.list.terms,
					oldListId: $scope.list.id
				}, function (err, data) {
					window.location.href = '/list/' + data.id;
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
				if ($scope.currUser.id === $scope.listId) {
					$($event.currentTarget).siblings('textarea').show().focus();
					$($event.currentTarget).hide();
				}
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
				if ($scope.currUser.id === $scope.listId) {
					$($event.currentTarget).siblings('textarea').show().focus();
					$($event.currentTarget).hide();
				}
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

				$scope.currUser = users.getCurrentUser();

				if (Quizlet.isQuizlet($scope.listId)) {
					Quizlet.getSet($scope.listId, function (err, data) {
						$scope.list = data;
					});
				} else {
					lists.getList($scope.listId, function (err, data) {
						$scope.list = data;
					});

					$scope.$watch('list', _.debounce(function (newValue, oldValue) {
						if ($scope.list) {
							setTimeout(function(){
								$('textarea').autosize();
							}, 1);

							$scope.list.terms.forEach(function (element) {
								if (element.options_raw) {
									var options = element.options_raw.split(',').map(function (elem) { return elem.trim(); });
									element.term = options[0];
									element.options = options.slice(1, options.length).filter(function (elem) { return elem.length > 0; });
								} else {
									element.options_raw = element.term + ',' + element.options.join();
								}
							});

							$scope.save();
						}
					}, 500), true);

					$scope.listOrder = 'default';
					$scope.$watch('listOrder', function (value) {
						if (!value) { return; }

						var orders = {
							default: { predicate: '', reverse: false },
							alpha: { predicate: 'term', reverse: false },
							alphaReverse: { predicate: 'term', reverse: true },
						};

						$scope.predicate = orders[value].predicate;
						$scope.reverse = orders[value].reverse;
					});
				}
			};

			$scope.init();
		}]);

});
