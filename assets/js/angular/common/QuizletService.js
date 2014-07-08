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
            }
        };
    }]);
});
