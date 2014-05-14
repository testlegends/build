/**
 * AuthService
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/05/12
 */

define(['common/services'], function (commonServices) {
    'use strict';

    return commonServices

        .factory('Auth', ['$rootScope', '$route', '$location', '$cookies', function ($rootScope, $route, $location, $cookies) {

            // TODO Check if token cookie exists, auto login

            return {
                isAuthenticated: null,
                isAuthorized: null,
                user: null
            };
        }]);
});
