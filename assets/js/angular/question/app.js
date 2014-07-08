/**
 * Question App
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/04/28
 */

define([
    'angular',
    'angularLoadingBar',
    'question/QuestionDirective',
    'question/SidebarDirectives',
    'question/Controller',
    'question/Routes'
], function (angular) {
    'use strict';

    return angular.module('Question', [
        'chieffancypants.loadingBar',
        'Question.directives',
        'Question.controllers',
        'Question.routes'
    ]);
});
