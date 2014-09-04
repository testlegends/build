/**
 * GameService
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/04/24
 */

define(['angular', 'common/services/TestLegendsAPI'], function (angular) {
	'use strict';

	return angular.module('Game.services', ['Common.services'])

		.factory('games', ['TestLegendsAPI', function (TestLegendsAPI) {
			return {
                list: function (cb) {
                    TestLegendsAPI.get('/games')
                        .success(function (response) {
							if (response.status === 'OK') {
								cb(null, response.data);
							} else {
								cb(response.error, null);
							}
                        });
                },

				create: function (params, cb) {
					TestLegendsAPI.put('/games', params)
						.success(function (response) {
							if (response.status === 'OK') {
								cb(null, response.data);
							} else {
								cb(response.error, null);
							}
						});
				},

                get: function (id, cb) {
                    TestLegendsAPI.get('/game/' + id)
                        .success(function (response) {
							if (response.status === 'OK') {
								cb(null, response.data);
							} else {
								cb(response.error, null);
							}
                        });
                },

                save: function (params, cb) {
                    TestLegendsAPI.post('/games/' + params.id, {

                    }).success(function (response) {
						if (response.status === 'OK') {
							cb(null, response.data);
						} else {
							cb(response.error, null);
						}
                    });
                },

				delete: function (id, cb) {
					TestLegendsAPI.delete('/games/' + id)
						.success(function (response) {
							if (response.status === 'OK') {
								cb(null);
							} else {
								cb(response.error);
							}
						});
                }
			};
		}]);
});
