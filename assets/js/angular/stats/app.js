/**
 * Stats App
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/06/24
 */

define([
    'angular',
    'angularLoadingBar',
    'stats/Controller',
    'stats/Routes'
], function (angular) {
    'use strict';

    return angular.module('Stats', [
        'chieffancypants.loadingBar',
        'Stats.controllers',
        'Stats.routes'
    ]);
});
