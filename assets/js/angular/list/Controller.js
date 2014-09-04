/**
 * ListControllers
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/06/24
 */

define(['angular', 'angularCookies', 'list/Service', 'common/services/Quizlet'], function (angular) {
	'use strict';

	return angular.module('List.controllers', ['List.services', 'Common.services', 'ngCookies'])

		.controller('ListController', ['$scope', '$location', 'lists', 'Quizlet', function ($scope, $location, lists, Quizlet) {

			$scope.search = function () {
				$location.search('q', $scope.search_params.q);
				Quizlet.search($scope.search_params, function (err, data) {
					$scope.search_result = data.result;
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
				Quizlet.search($scope.search_params, function (err, data) {
					$scope.search_result = data.result;
					$scope.curr_page = page;
				});

				return false;
			};

			$scope.createList = function () {
				lists.create(function (err, data) {
					window.location.href = '/list/' + data.id;
				});
			};

			$scope.viewList = function (id, quizlet) {
				if (quizlet) {
					window.location.href = '/import/' + id;
				} else {
					window.location.href = '/list/' + id;
				}
			};

			$scope.selectList = function (id) {
				var index = $scope.selectedList.indexOf(id);
				if (index === -1) {
					$scope.selectedList.push(id);
					$('#studySet-' + id).addClass('studySetSelected');
				} else {
					$scope.selectedList.splice(index, 1);
					$('#studySet-' + id).removeClass('studySetSelected');
				}

				if ($location.url() === '/') {
					if ($scope.selectedList.length > 0) {
						$('.addClass').hide();
						$('.addToClass').show();
					} else {
						$('.addClass').show();
						$('.addToClass').hide();
					}
				} else {
					// Import list
					if ($scope.selectedList.length > 0) {
						$('.sidebar').removeClass('sidebar-disabled');
					} else {
						$('.sidebar').addClass('sidebar-disabled');
					}
				}
			};

			$scope.deleteList = function (id, type) {
				lists.delete(id, function (err) {
					if (type === 'saved') {
						$scope.userLists.saved = $scope.userLists.saved.filter(function (list) {
							return list.id !== id;
						});
					} else {
						$scope.userLists.created = $scope.userLists.created.filter(function (list) {
							return list.id !== id;
						});
					}
				});
			};

			//TODO: Should put this in a filter or service
			$scope.makeArray = function (num) {
				return new Array(num);
			};

			$scope.init = function () {
				if ($location.url() === '/') {
					// Lists page init
					lists.getLists(function (err, data) {
						$scope.userLists = {
							saved: data.filter(function (list) {
								return list.meta.userId !== list.meta.creatorId;
							}),
							created: data.filter(function (list) {
								return list.meta.userId === list.meta.creatorId;
							})
						};
					});

					$scope.listOrder = 'alpha';
					$scope.$watch('listOrder', function (value) {
						if (!value) { return; }

						var orders = {
							alpha: { predicate: 'title', reverse: false },
							alphaReverse: { predicate: 'title', reverse: true },
							date: { predicate: 'createdAt', reverse: false },
							dateReverse: { predicate: 'createdAt', reverse: true }
						};

						$scope.predicate = orders[value].predicate;
						$scope.reverse = orders[value].reverse;
					});
				} else {
					// Import page init
					var query = $location.search();
					if (query.q) {
						$scope.search_params = { q: query.q, page: query.page };
						$scope.search();
					}
				}

				$scope.selectedList = [];
			};

			$scope.init();
		}]);
});
