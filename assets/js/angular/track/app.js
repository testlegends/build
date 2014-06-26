/**
 * Track App
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/06/24
 */

define([
    'angular',
    'angularLoadingBar',
], function (angular) {
    'use strict';

    return angular.module('Track', [
        'chieffancypants.loadingBar'
    ]);
});
