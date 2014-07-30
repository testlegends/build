/**
 * Track App
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/06/24
 */

define([
    'angular',
    'angularLoadingBar',
    'track/Controller',
    'track/Routes'
], function (angular) {
    'use strict';

    return angular.module('Track', [
        'chieffancypants.loadingBar',
        'Track.controllers',
        'Track.routes'
    ]);
});
