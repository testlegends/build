/**
 * Map App
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/04/28
 */

define([
    'angular',
    'angularLoadingBar',
    'map/MapController',
    'map/MapRoutes'
], function (angular) {
    'use strict';

    return angular.module('Map', [
        'chieffancypants.loadingBar',
        'Map.controllers',
        'Map.routes'
    ]);
});
