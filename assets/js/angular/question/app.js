/**
 * Map App
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/04/28
 */

define([
    'angular',
    'angularLoadingBar',
    'question/QuestionController',
    'question/QuestionRoutes'
], function (angular) {
    'use strict';

    return angular.module('Question', [
        'chieffancypants.loadingBar',
        'Question.controllers',
        'Question.routes'
    ]);
});
