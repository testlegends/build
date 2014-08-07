/**
 * QuestionDirectives
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/05/12
 */

define([
    'angular',
    'angularUISortable',
    'game/Service',
    'question/Service'
], function (angular) {
    'use strict';

    return angular.module('Question.directives', [
        'ui.sortable',
        'Game.services',
        'Question.services'
    ]);
});
