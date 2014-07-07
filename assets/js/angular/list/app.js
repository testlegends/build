/**
 * List App
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/06/24
 */

define([
    'angular',
    'angularLoadingBar',
    'list/Controller',
    'list/Routes'
], function (angular) {
    'use strict';

    return angular.module('List', [
        'chieffancypants.loadingBar',
        'List.controllers',
        'List.routes'
    ]);
});
