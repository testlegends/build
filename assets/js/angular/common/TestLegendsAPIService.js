/**
 * TestLegendsAPIService
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/05/11
 */

define(['common/services'], function (commonServices) {
    'use strict';

    return commonServices

        .constant('Globals', {
            //api_url: 'http://localhost:1339'
            api_url: 'http://api.testlegends.com'
        })

        .factory('TestLegendsAPI', ['$http', '$cookies', 'Globals', function ($http, $cookies, Globals) {
            $http.defaults.headers.common.Authorization = 'Bearer ' + $cookies.access_token;

            function TestLegendsAPI (params) {
                if (params) {
                    params.url = Globals.api_url + params.url;
                    return $http(params);
                }
            }

            TestLegendsAPI.get = function (url, config) {
                return $http.get(Globals.api_url + url, config);
            };

            TestLegendsAPI.post = function (url, data, config) {
                return $http.post(Globals.api_url + url, data, config);
            };

            TestLegendsAPI.put = function (url, data, config) {
                return $http.put(Globals.api_url + url, data, config);
            };

            TestLegendsAPI.delete = function (url, config) {
                return $http.delete(Globals.api_url + url, config);
            };

            TestLegendsAPI.jsonp = function (url, config) {
                return $http.jsonp(Globals.api_url + url, config);
            };

            TestLegendsAPI.head = function (url, config) {
                return $http.head(Globals.api_url + url, config);
            };

            return TestLegendsAPI;
        }]);
});
