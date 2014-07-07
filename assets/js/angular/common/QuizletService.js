/**
 * QuizletService
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/06/24
 */

define(['common/services'], function (commonServices) {
    'use strict';

    return commonServices

    .factory('quizlet', ['$http', function ($http) {
        return {
            // From local server -> Quizlet API Server
            loggedIn: function () {
                return $http.get('/quizlet/loggedIn')
                    .success(function (response) {
                        if (!response.loggedIn) {
                            window.location = '/quizlet/login';
                        }
                    });
            },
            search: function (params, cb) {
                return $http.get('/quizlet/search?' + $.param(params))
                    .success(function (data) {
                        cb(data);
                    });
            },
            getSet: function (id, cb) {
                return $http.get('/quizlet/search?' + $.param({ q: id }))
                    .success(function (data) {
                        cb(data.result.sets[0]);
                    });
            }
        };
    }]);
});
