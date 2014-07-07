/**
 * TermService
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/07/06
 */

define(['angular'], function (angular) {
	'use strict';

	return angular.module('Term.services', [])

		.factory('terms', ['$http', function ($http) {
			return {
				edit: function (params, cb) {

				},
				delete: function (params, cb) {
					
				}
			};
		}]);
});
