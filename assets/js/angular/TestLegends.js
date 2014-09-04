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
        jqueryAutosize: '../vendor/jquery-autosize/jquery.autosize',
        jqueryNoUiSlider: '../vendor/nouislider/jquery.nouislider.min',
        jqueryKnob: '../vendor/jquery-knob/dist/jquery.knob.min',
        bootstrap: '../vendor/bootstrap/dist/js/bootstrap',
        underscore: '../vendor/underscore/underscore',

        angular: '../vendor/angular/angular',
        angularCookies: '../vendor/angular-cookies/angular-cookies',
        angularRoute: '../vendor/angular-route/angular-route',
        angularLoadingBar: '../vendor/angular-loading-bar/build/loading-bar',
        angularUISortable: '../vendor/angular-ui-sortable/sortable.min'
    },
    shim: {
        jquery: { exports: '$' },
        jqueryUI: ['jquery'] ,
        jqueryAutosize: ['jquery'],
        jqueryNoUiSlider: ['jquery'],
        jqueryKnob: ['jquery'],
        bootstrap: ['jquery'],
        underscore: { exports: '_' },

        angular: { exports: 'angular', deps: ['jquery'] },
        angularCookies: ['angular'],
        angularRoute: ['angular'],
        angularLoadingBar: ['angular'],
        angularUISortable: ['jquery', 'jqueryUI', 'angular']
    },
    priority: ['jquery', 'jqueryUI', 'angular']
});

require([
    'angular',
    'class/app',
    'stats/app',
    'list/app',
    'term/app',
    'game/app',
    'question/app',
    'user/app',
    'item/app'
], function (angular, classApp, statsApp, listApp, termApp, gameApp, questionApp, userApp, itemApp) {
    'use strict';

    angular.element(document).ready(function () {
        angular.bootstrap(document, [
            classApp.name,
            statsApp.name,
            listApp.name,
            termApp.name,
            gameApp.name,
            questionApp.name,
            userApp.name,
            itemApp.name
        ]);
    });
});
