/**
 * Question App
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/04/28
 */

define([
    'angular',
    'angularLoadingBar',
    'angularUISortable',
    'question/SidebarDirectives',
    'question/Controller',
    'question/Routes',
], function (angular) {
    'use strict';

    return angular.module('Question', [
        'chieffancypants.loadingBar',
        'ui.sortable',
        'Question.directives',
        'Question.controllers',
        'Question.routes'
    ]);
});
