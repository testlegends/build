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
                        .success(function (data) {
                            cb(data);
                        });
                },

                get: function (id, cb) {
                    return TestLegendsAPI.get('/game/' + id)
                        .success(function (data) {
                            cb(data);
                        });
                },

                create: function (params, cb) {
                    return TestLegendsAPI.put('/games', params)
                        .success(function (data) {
                            cb(data);
                        });
                },

                save: function (params, cb) {
                    return TestLegendsAPI.post('/games' + params.id, {

                    }).success(function (data) {

                    });
                },

                delete: function (id, cb) {
                    alert("Delete " + id);
                }
			};
		}]);
});
