/**
 * UserService
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/07/06
 */

define(['angular', 'common/services/TestLegendsAPI', 'common/services/Auth'], function (angular) {
	'use strict';

	return angular.module('User.services', ['Common.services'])

		.factory('users', ['TestLegendsAPI', 'Auth', function (TestLegendsAPI, Auth) {
			return {
				getUser: function (id, cb) {
					TestLegendsAPI.get('/user/' + id).success(function (response) {
						if (response.status === 'OK') {
							cb(null, response.data);
						} else {
							cb(response.data);
						}
					});
				},
				getCurrentUser: function () {
					return Auth.user();
				}
			};
		}]);
});
