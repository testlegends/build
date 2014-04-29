/**
* TestLegends
*
* @author      :: Jeff Lee
* @created     :: 2014/04/28
*/

require.config({
    paths: {
        angular: '../vendor/angular/angular',
        angularRoute: '../vendor/angular-route/angular-route',
        angularLoadingBar: '../vendor/angular-loading-bar/build/loading-bar'
    },
    shim: {
        'angular': { 'exports': 'angular' },
        'angularRoute': ['angular'],
        'angularLoadingBar': ['angular']
    },
    priority: ['angular']
});

require([
    'angular',
    'map/app',
    'world/app',
    'game/app'
], function (angular, mapApp, worldApp, gameApp) {
    'use strict';

    angular.element(document).ready(function () {
        angular.bootstrap(document, [mapApp.name, worldApp.name, gameApp.name]);
    });
});
