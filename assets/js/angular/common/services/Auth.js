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

            // TODO: Check route params for needAuthentication

            function login () {
                window.location.href = '/login';
            }

            function isAuthenticated () {
                if ($cookies.access_token) {
                    return true;
                }

                return false;
            }

            function isAuthorized () {
                return true;
            }

            function user () {
                return {
                    id: "1",
                    email: ""
                };
            }

            return {
                login: login,
                isAuthenticated: isAuthenticated,
                isAuthorized: isAuthorized,
                user: user
            };
        }]);
});
