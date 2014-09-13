/**
 * QuizletService
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/06/24
 */

define(['common/services'], function (commonServices) {
    'use strict';

    return commonServices

        .factory('Quizlet', ['$http', function ($http) {
            return {
                search: function (params, cb) {
                    return $http.get('/quizlet/search?' + $.param(params))
                        .success(function (response) {
                            if (response.status === 'OK') {
                                cb(null, response.data);
                            } else {
                                cb(response.error, null);
                            }
                        });
                },
                getSet: function (id, cb) {
                    return $http.get('/quizlet/search?' + $.param({ q: id }))
                        .success(function (response) {
                            if (response.status === 'OK') {
                                cb(null, response.data.result.sets[0]);
                            } else {
                                cb(response.error, null);
                            }
                        });
                },
                isQuizlet: function (id) {
                    /** HACK: Assumes Quizlet set id is all number and TestLegends list id contains string */
                    return !isNaN(id);
                }
            };
        }]);
});
