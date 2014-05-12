/**
 * TestLegendsAPIService
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/05/11
 */

define(['angular', 'angularCookies'], function (angular) {
    'use strict';

    return angular.module('Common.services', ['ngCookies'])

        .constant('Globals', {
            //api_url: 'http://localhost:1339',
            api_url: 'http://api.testlegends.com',
            user: (function(){
                // get user obj from server, maybe need to change to factory
                // or can just get cookie manually
            })()
        })

        .factory('TestLegendsAPI', ['$http', '$cookies', 'Globals', function ($http, $cookies, Globals) {
            return function (params) {
                $http.defaults.headers.common.Authorization = 'Bearer ' + $cookies.access_token;

                if (params) {
                    params.url = Globals.api_url + params.url;
                    return $http(params);
                }

                return {
                    get: function (url, config) {
                        return $http.get(Globals.api_url + url, config);
                    },

                    post: function (url, data, config) {
                        return $http.post(Globals.api_url + url, data, config);
                    },

                    put: function (url, data, config) {
                        return $http.put(Globals.api_url + url, data, config);
                    },

                    delete: function (url, config) {
                        return $http.delete(Globals.api_url + url, config);
                    },

                    jsonp: function (url, config) {
                        return $http.jsonp(Globals.api_url + url, config);
                    },

                    head: function (url, config) {
                        return $http.head(Globals.api_url + url, config);
                    }
                };
            };
        }]);
});
