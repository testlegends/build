/**
 * TermController
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/07/06
 */

define(['angular', 'term/Service', 'common/QuizletService'], function (angular) {
	'use strict';

	return angular.module('Term.controllers', ['Term.services', 'Common.services'])

		.controller('TermController', ['$scope', '$routeParams', 'terms', 'quizlet', function ($scope, $routeParams, terms, quizlet) {

			$scope.name = "TermController";

			$scope.listId = $routeParams.listId;

			quizlet.getSet($scope.listId, function (response) {
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
