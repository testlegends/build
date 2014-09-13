/**
 * UserService
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/07/06
 */

define(['angular', 'common/services/TestLegendsAPI'], function (angular) {
	'use strict';

	return angular.module('User.services', ['Common.services'])

		.factory('users', ['TestLegendsAPI', function (TestLegendsAPI) {
			return {
				getUser: function (id, cb) {
					TestLegendsAPI.get('/user/' + id).success(function (response) {
						if (response.status === 'OK') {
							cb(null, response.data);
						} else {
							cb(response.data);
						}
					});
				}
			};
		}]);
});
