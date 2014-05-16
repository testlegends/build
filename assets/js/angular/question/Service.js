/**
 * QuestionService
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/05/08
 */

define(['angular', 'common/TestLegendsAPIService'], function (angular) {
	'use strict';

	return angular.module('Question.services', ['Common.services'])

		.factory('questions', ['TestLegendsAPI', function (TestLegendsAPI) {
			return {
                list: function (gameId, cb) {
                    return TestLegendsAPI({
                        url: '/questions',
                        method: 'GET',
                        params: { gameId: gameId }
                    }).success(function (data) {
                        cb(data);
                    });
                },

                get: function (id, cb) {

                },

                create: function (params, cb) {
                    cb({
                        data: {
                            type: params.type,
                            difficulty: params.difficulty,
                            meta: {
                                gameId: params.meta.gameId,
                                order: params.meta.order
                            }
                        }
                    });
                },

                updateOrder: function (list, cb) {

                }
			};
		}]);
});
