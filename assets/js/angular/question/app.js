/**
 * Map App
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/04/28
 */

define([
    'angular',
    'angularLoadingBar',
    'angularUISortable',
    'question/QuestionDirectives',
    'question/QuestionController',
    'question/QuestionService',
    'question/QuestionRoutes',
], function (angular) {
    'use strict';

    return angular.module('Question', [
        'chieffancypants.loadingBar',
        'ui.sortable',
        'Question.directives',
        'Question.controllers',
        'Question.services',
        'Question.routes'
    ]);
});
