/**
 * List App
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/06/24
 */

define([
    'angular',
    'angularLoadingBar',
    'list/directives/PlaySidebar',
    'list/directives/ImportSidebar',
    'list/Controller',
    'list/Routes'
], function (angular) {
    'use strict';

    return angular.module('List', [
        'chieffancypants.loadingBar',
        'List.directives',
        'List.controllers',
        'List.routes'
    ]);
});
