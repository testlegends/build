/**
 * QuestionController
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/05/08
 */

define(['angular', 'question/Service'], function (angular) {
	'use strict';

	return angular.module('Question.controllers', ['Question.services'])

		.controller('QuestionController', ['$scope', 'questions', function ($scope, questions) {

            $scope.name = "QuestionController";

            $scope.questions = [];

            $scope.sortableOptions = {
                update: function(e, ui) { },
                stop: function(e, ui) { }
            };

        }]);
});
