/**
 * GameService
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/04/24
 */

define(['angular', 'common/TestLegendsAPIService'], function (angular) {
	'use strict';

	return angular.module('Game.services', ['Common.services'])

		.factory('games', ['TestLegendsAPI', function (TestLegendsAPI) {
			return {
                list: function (cb) {
                    return TestLegendsAPI.get('/games')
                        .success(function (response) {
							if (response.status === 'OK') {
								cb(null, response.data);
							} else {
								cb(response.error, null);
							}
                        });
                },

                get: function (id, cb) {
                    return TestLegendsAPI.get('/game/' + id)
                        .success(function (response) {
							if (response.status === 'OK') {
								cb(null, response.data);
							} else {
								cb(response.error, null);
							}
                        });
                },

                create: function (params, cb) {
                    return TestLegendsAPI.put('/games', params)
                        .success(function (response) {
							if (response.status === 'OK') {
								cb(null, response.data);
							} else {
								cb(response.error, null);
							}
                        });
                },

                save: function (params, cb) {
                    return TestLegendsAPI.post('/games' + params.id, {

                    }).success(function (response) {
						if (response.status === 'OK') {
							cb(null, response.data);
						} else {
							cb(response.error, null);
						}
                    });
                },

                delete: function (id, cb) {
                    alert("Delete " + id);
                }
			};
		}]);
});
