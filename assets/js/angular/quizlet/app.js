/**
 * Quizlet App
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/06/24
 */

define([
    'angular',
    'angularLoadingBar',
    'quizlet/Controller',
    'quizlet/Routes'
], function (angular) {
    'use strict';

    return angular.module('Quizlet', [
        'chieffancypants.loadingBar',
        'Quizlet.controllers',
        'Quizlet.routes'
    ]);
});
