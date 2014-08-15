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
        jqueryAutosize: '../vendor/jquery-autosize/jquery.autosize.min',
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
