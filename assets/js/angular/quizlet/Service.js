/**
 * QuizletService
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/06/24
 */

define(['angular', 'common/TestLegendsAPIService'], function (angular) {
	'use strict';

	return angular.module('Quizlet.services', ['Common.services'])

		.factory('quizlet', ['$http', 'TestLegendsAPI', function ($http, TestLegendsAPI) {
			return {
				loggedIn: function (cb) {
					return $http.get('/quizlet/loggedIn')
						.success(function (data) {
							cb(data);
						});
				},
                search: function (params, cb) {
					return $http.get('/quizlet/search?' + $.param(params))
						.success(function (data) {
							cb(data);
						});
                },

                save: function (params, cb) {

                }
			};
		}]);
});
