/**
 * ListServices
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/06/24
 */

define(['angular', 'common/TestLegendsAPIService'], function (angular) {
	'use strict';

	return angular.module('List.services', ['Common.services'])

		.factory('list', ['$http', 'TestLegendsAPI', function ($http, TestLegendsAPI) {
			return {
				search: function (params, cb) {

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
