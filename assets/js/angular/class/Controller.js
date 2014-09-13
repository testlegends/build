/**
 * ClassController
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/08/21
 */

define(['angular', 'toastr', 'class/Service', 'list/Service', 'user/Service'], function (angular, toastr) {
	'use strict';

	return angular.module('Class.controllers', ['Class.services', 'List.services', 'User.services'])

		.controller('ClassController', ['$scope', '$location', '$routeParams', 'classes', 'lists', 'users', function ($scope, $location, $routeParams, classes, lists, users) {

			$scope.viewList = function (id) {
				window.location.href = '/list/' + id;
			};

			$scope.addListPopup = function () {
				$('#addListPopup').show();
			};

			$scope.removeClass = function () {
				classes.removeClass($scope.classId, function (err, data) {
					window.location.href = '/';
					toastr.success('Class deleted successfully');
				});
			};

			$scope.removeList = function (id) {
				classes.removeList({
					classId: $scope.classId,
					listId: id
				}, function (err, data) {
					$scope.lists = $scope.lists.filter(function (list) {
						return list.id !== id;
					});
				});
			};

			$scope.init = function () {
				$scope.classId = $routeParams.classId;

				classes.findClass($scope.classId, function (err, data) {
					$scope.class = data;

					users.getUser(data.meta.userId, function (err, data) {
						$scope.classOwner = data;
					});
				});

				classes.getLists($scope.classId, function (err, data) {
					$scope.lists = data;
				});

				$scope.currUser = users.getCurrentUser();

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

				$scope.newList = {};
			};

			$scope.init();
		}]);
});
