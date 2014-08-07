/**
 * TestLegendsAPI Service
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/05/11
 */

define(['common/services', 'common/services/TestLegendsURL'], function (commonServices) {
    'use strict';

    return commonServices

        .factory('TestLegendsAPI', ['$http', '$cookies', 'TestLegendsURL', function ($http, $cookies, TestLegendsURL) {
            $http.defaults.headers.common.Authorization = 'Bearer ' + $cookies.access_token;

            function TestLegendsAPI (params) {
                if (params) {
                    params.url = TestLegendsURL.api + params.url;
                    return $http(params);
                }
            }

            TestLegendsAPI.get = function (url, config) {
                return $http.get(TestLegendsURL.api + url, config);
            };

            TestLegendsAPI.post = function (url, data, config) {
                return $http.post(TestLegendsURL.api + url, data, config);
            };

            TestLegendsAPI.put = function (url, data, config) {
                return $http.put(TestLegendsURL.api + url, data, config);
            };

            TestLegendsAPI.delete = function (url, config) {
                return $http.delete(TestLegendsURL.api + url, config);
            };

            TestLegendsAPI.jsonp = function (url, config) {
                return $http.jsonp(TestLegendsURL.api + url, config);
            };

            TestLegendsAPI.head = function (url, config) {
                return $http.head(TestLegendsURL.api + url, config);
            };

            return TestLegendsAPI;
        }]);
});
