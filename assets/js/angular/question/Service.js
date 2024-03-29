/**
 * QuestionService
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/05/08
 */

define(['angular', 'common/services/TestLegendsAPI'], function (angular) {
	'use strict';

	return angular.module('Question.services', ['Common.services'])

		.factory('questions', ['TestLegendsAPI', function ($TestLegendsAPI) {
			return {
                list: function (gameId, cb) {
                    return $TestLegendsAPI({
                        url: '/game/' + gameId + '/questions',
                        method: 'GET'
                    }).success(function (response) {
                        if (response.status === 'OK') {
							cb(null, response.data);
						} else {
							cb(response.error, null);
						}
                    });
                },

                create: function (params, cb) {
                    return $TestLegendsAPI({
                        url: '/game/' + params.meta.gameId + '/questions',
                        method: 'PUT',
                        data: {
                            order: params.meta.order,
                            num_wrongs: params.options.wrong,
                            type: params.type,
                            difficulty: params.difficulty
                        }
                    }).success(function (response) {
						if (response.status === 'OK') {
							cb(null, response.data);
						} else {
							cb(response.error, null);
						}
                    });
                },

                get: function (id, cb) {

                },

                save: function (params, cb) {
                    var wrongAnswers = (function (wrongOptions) {
                        var result = '';
                        for (var i in wrongOptions) {
                            result += i === '0' ? '' : ',';
                            result += wrongOptions[i].text;
                        }
                        return result;
                    })(params.options.wrong);

                    return $TestLegendsAPI({
                        url: '/game/__gameId__/question/' + params.id,
                        method: 'POST',
                        data: {
                            type: params.type,
                            difficulty: params.difficulty,
                            content: params.content,
                            correct: params.options.correct,
                            wrong: wrongAnswers
                        }
                    }).success(function (response) {
						if (response.status === 'OK') {
							cb(null, response.data);
						} else {
							cb(response.error, null);
						}
                    });
                },

                delete: function (params, cb) {
                    return $TestLegendsAPI({
                        url: '/game/__gameId__/question/' + params.id,
                        method: 'DELETE'
                    }).success(function (response) {
						if (response.status === 'OK') {
							cb(null, response.data);
						} else {
							cb(response.error, null);
						}
                    });
                }
			};
		}]);
});
