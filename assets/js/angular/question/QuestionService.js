/**
 * QuestionService
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/05/08
 */

define(['angular', 'common/TestLegendsAPIService'], function (angular) {
	'use strict';

	return angular.module('Question.services', ['Common.services'])

		.factory('questions', ['TestLegendsAPI', function (TestLegendsAPI) {
			return {
                list: function (gameId) {

                },

                get: function (id) {

                }
			};
		}]);
});