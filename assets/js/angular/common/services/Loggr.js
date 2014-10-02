/**
 * LoggrService
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/10/01
 */

define(['common/services', 'common/services/Auth'], function (commonServices) {
    'use strict';

    return commonServices

        .factory('Loggr', ['$http', 'Auth', function ($http, Auth) {
            return {
                log: function (action) {
                    $http.put('/log', {
                        action: action,
                        user: Auth.user()
                    }).success(function (response) {

                    });
                }
            };
        }]);
});
