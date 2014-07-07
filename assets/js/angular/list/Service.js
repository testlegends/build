/**
 * ListServices
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/06/24
 */

define(['angular', 'common/TestLegendsAPIService'], function (angular) {
	'use strict';

	return angular.module('List.services', ['Common.services'])

		.factory('lists', ['TestLegendsAPI', function ($TestLegendsAPI) {
			return {
				search: function (params, cb) {

				},
				list: function (cb) {
					$TestLegendsAPI({
						url: '/lists',
						method: 'GET'
					}).success(function (response) {
						if (response.status === 'OK') {
							cb(null, response.data);
						} else {
							cb(response.error, null);
						}
					});
				},
				save: function (params, cb) {
					$TestLegendsAPI({
						url: '/lists',
						method: 'PUT',
						data: {
							title: params.title,
							desc: params.desc,
							terms: params.terms
						}
					}).success(function (response) {
						if (response.status === 'OK') {
							cb(null, response.data);
						} else {
							cb(response.error, null);
						}
					});
				},
				generate: function (cb) {

				}
			};
		}]);
});
