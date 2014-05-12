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
                    return TestLegendsAPI().get('/games')
                        .success(function(data) {
                            cb(data);
                        })
                        .error(function(data, status){

                        });
                },

                get: function (id, cb) {

                }
			};
		}]);
});
