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
				// From local server -> Quizlet API Server
				loggedIn: function () {
					return $http.get('/quizlet/loggedIn')
						.success(function (response) {
							if (!response.loggedIn) {
								window.location = '/quizlet/login';
							}
						});
				},
                search: function (params, cb) {
					return $http.get('/quizlet/search?' + $.param(params))
						.success(function (data) {
							cb(data);
						});
                },
				getSet: function (id, cb) {
					return $http.get('/quizlet/search?' + $.param({ q: id }))
						.success(function (data) {
							cb(data.result.sets[0]);
						});
				},

				// From API Server
				list: function (cb) {

				},
                save: function (params, cb) {

                },
				generate: function (cb) {

				}
			};
		}]);
});
