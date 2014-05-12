/**
* TestLegends Build
*
* @author      :: Jeff Lee
* @created     :: 2014/04/28
*/

require.config({
    paths: {
        jquery: '//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min',
        jqueryUI: '//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min',
        angular: '../vendor/angular/angular',
        angularCookies: '../vendor/angular-cookies/angular-cookies.min',
        angularRoute: '../vendor/angular-route/angular-route',
        angularLoadingBar: '../vendor/angular-loading-bar/build/loading-bar',
        angularUISortable: '../vendor/angular-ui-sortable/sortable.min',
    },
    shim: {
        'angular': { 'exports': 'angular' },
        'angularCookies': ['angular'],
        'angularRoute': ['angular'],
        'angularLoadingBar': ['angular'],
        'angularUISortable': ['angular', 'jquery', 'jqueryUI']
    },
    priority: ['angular']
});

require([
    'angular',
    'game/app',
    'question/app',
    'theme/app'
], function (angular, gameApp, questionApp, themeApp) {
    'use strict';

    angular.element(document).ready(function () {
        angular.bootstrap(document, [gameApp.name, questionApp.name, themeApp.name]);
    });
});
