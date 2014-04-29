/**
 * World App
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/04/28
 */

define([
    'angular',
    'angularLoadingBar',
    'world/WorldController',
    'world/WorldRoutes'
], function (angular) {
    'use strict';

    return angular.module('World', [
        'chieffancypants.loadingBar',
        'World.controllers',
        'World.routes'
    ]);
});
