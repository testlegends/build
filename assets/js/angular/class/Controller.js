/**
 * ClassController
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/08/21
 */

define(['angular', 'class/Service'], function (angular) {
	'use strict';

	return angular.module('Class.controllers', ['Class.services'])

		.controller('ClassController', ['$scope', '$location', '$routeParams', 'classes', 'lists', function ($scope, $location, $routeParams, classes, lists) {

			$scope.addClass = function () {
				classes.addClass({
					name: $scope.newClass.name,
					desc: $scope.newClass.desc
				}, function (err, data) {
					$scope.classes.push(data);
					$scope.newClass = {};
				});
			};

			$scope.addList = function (id) {
				classes.addList({
					classId: $scope.classId,
					listId: id || $scope.newList.id
				}, function (err, data) {
					if (err) {

					} else {
						$scope.lists.push(data);
						$scope.newList = {};
					}
				});
			};

			$scope.removeClass = function (id) {
				classes.removeClass(id, function (err, data) {
					$scope.classes = $scope.classes.filter(function (classObj) {
						return classObj.id !== id;
					});
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
				});

				classes.getLists($scope.classId, function (err, data) {
					$scope.lists = data;
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

				$scope.newList = {};
			};

			$scope.init();
		}]);
});
