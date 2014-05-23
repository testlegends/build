/**
 * QuestionService
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/05/08
 */

define(['angular', 'common/TestLegendsAPIService'], function (angular) {
	'use strict';

	return angular.module('Question.services', ['Common.services'])

		.factory('questions', ['TestLegendsAPI', function ($TestLegendsAPI) {
			return {
                list: function (gameId, cb) {
                    return $TestLegendsAPI({
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
                    return $TestLegendsAPI({
                        url: '/questions',
                        method: 'PUT',
                        data: {
                            gameId: params.meta.gameId,
                            order: params.meta.order,
                            num_wrongs: params.options.wrong,
                            type: params.type,
                            difficulty: params.difficulty
                        }
                    }).success(function (data) {
                        cb(data);
                    });
                },

                save: function (params, cb) {
                    var wrongAnswers = (function(wrongOptions){
                        var result = '';
                        for (var i in wrongOptions) {
                            result += i === '0' ? '' : ',';
                            result += wrongOptions[i].text;
                        }
                        return result;
                    })(params.options.wrong);

                    return $TestLegendsAPI({
                        url: '/question/' + params.id,
                        method: 'POST',
                        data: {
                            type: params.type,
                            difficulty: params.difficulty,
                            content: params.content,
                            correct: params.options.correct,
                            wrong: wrongAnswers
                        }
                    }).success(function (data) {
                        cb(data);
                    });
                },

                delete: function (params, cb) {
                    return $TestLegendsAPI({
                        url: '/question/' + params.id,
                        method: 'DELETE'
                    }).success(function (data) {
                        cb(data);
                    });
                },

                updateOrder: function (list, cb) {

                }
			};
		}]);
});