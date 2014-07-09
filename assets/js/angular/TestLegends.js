/**
* TestLegends Build
*
* @author      :: Jeff Lee
* @created     :: 2014/04/28
*/

require.config({
    baseUrl: '/js/angular',
    paths: {
        jquery: '../vendor/jquery/dist/jquery',
        jqueryUI: '../vendor/jquery-ui/ui/minified/jquery-ui.min',
        bootstrap: '../vendor/bootstrap/dist/js/bootstrap',
        select2: "../vendor/select2/select2",
        underscore: '../vendor/underscore/underscore',

        angular: '../vendor/angular/angular',
        angularCookies: '../vendor/angular-cookies/angular-cookies',
        angularRoute: '../vendor/angular-route/angular-route',
        angularLoadingBar: '../vendor/angular-loading-bar/build/loading-bar',
        angularUISelect2: '../vendor/angular-ui-select2/src/select2',
        angularUISortable: '../vendor/angular-ui-sortable/sortable.min'
    },
    shim: {
        jquery: { exports: '$' },
        bootstrap: ['jquery'],
        select2: ['jquery'],
        underscore: { exports: '_' },
        angular: { exports: 'angular', deps: ['jquery'] },
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
    'list/app',
    'term/app',
    'game/app',
    'question/app',
    'item/app',
    'theme/app',
    'track/app',
    'user/app'
], function (angular, listApp, termApp, gameApp, questionApp, itemApp, themeApp, trackApp, userApp) {
    'use strict';

    angular.element(document).ready(function () {
        angular.bootstrap(document, [
            listApp.name,
            termApp.name,
            gameApp.name,
            questionApp.name,
            itemApp.name,
            themeApp.name,
            trackApp.name,
            userApp.name
        ]);
    });
});
