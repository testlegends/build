/**
 * AuthService
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/05/12
 */

define(['common/services'], function (commonServices) {
    'use strict';

    return commonServices

        .factory('Auth', ['$rootScope', '$cookies', '$location', 'AuthEvents', function ($rootScope, $cookies, $location, AuthEvents) {

            // TODO: Check route params for needAuthentication

            function login (loggedIn) {
                if (loggedIn) {
                    var originalUrl = $cookies.current_path || '/';
                    $rootScope.$broadcast(AuthEvents.loginSuccess);
                    $location.path(originalUrl);
                } else {
                    window.location.href = '/login';
                }
            }

            function logout () {
                $rootScope.$broadcast(AuthEvents.logoutSuccess);
                window.location.href = '/logout';
            }

            function isAuthenticated () {
                return !!$cookies.user;
            }

            function isAuthorized () {
                //TODO: handle the roles
                return true;
            }

            function user () {
                return angular.fromJson($cookies.user);
            }

            return {
                login: login,
                logout: logout,
                isAuthenticated: isAuthenticated,
                isAuthorized: isAuthorized,
                user: user
            };
        }])

        .constant('AuthEvents', {
            loginSuccess: 'auth-login-success',
            loginFailed: 'auth-login-failed',
            logoutSuccess: 'auth-logout-success',
            sessionTimeout: 'auth-session-timeout',
            notAuthenticated: 'auth-not-authenticated',
            notAuthorized: 'auth-not-authorized'
        })

        .constant('Roles', {
            admin: 'admin',
            user: 'user',
            guest: 'guest'
        });
});
