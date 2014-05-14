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

            $rootScope.$on('$routeChangeSuccess', function (next, current) {
                var authRequired = $route.current && $route.current.needAuthentication;

                // TODO Check if token cookie exists, auto login

                if (authRequired && !$rootScope.isAuthenticated) {
                    $location.url('/');
                }
            });

            return null;
        }]);
});
