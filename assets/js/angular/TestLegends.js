/**
* TestLegends Build
*
* @author      :: Jeff Lee
* @created     :: 2014/04/28
*/

require.config({
    baseUrl: '/js/angular',
    paths: {
        jquery: '../vendor/jquery/dist/jquery.min',
        jqueryUI: '../vendor/jquery-ui/ui/minified/jquery-ui.min',
        bootstrap: '//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min',
        select2: "../vendor/select2/select2.min",
        underscore: '../vendor/underscore/underscore',

        angular: '../vendor/angular/angular',
        angularCookies: '../vendor/angular-cookies/angular-cookies.min',
        angularRoute: '../vendor/angular-route/angular-route',
        angularLoadingBar: '../vendor/angular-loading-bar/build/loading-bar',
        angularUISelect2: '../vendor/angular-ui-select2/src/select2',
        angularUISortable: '../vendor/angular-ui-sortable/sortable.min'
    },
    shim: {
        bootstrap: ['jquery'],
        select2: ['jquery'],
        underscore: { 'exports': '_' },
        angular: { 'exports': 'angular' },
        angularCookies: ['angular'],
        angularRoute: ['angular'],
        angularLoadingBar: ['angular'],
        angularUISelect2: ['jquery', 'select2', 'angular'],
        angularUISortable: ['jquery', 'jqueryUI', 'angular']
    },
    priority: ['jquery', 'jqueryUI', 'select2', 'angular']
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
