/**
 * QuestionDirectives
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/05/12
 */

define([
    'angular',
    'angularUISelect2',
    'angularUISortable',
    'game/Service',
    'question/Service'
], function (angular) {
    'use strict';

    return angular.module('Question.directives', [
        'ui.select2',
        'ui.sortable',
        'Game.services',
        'Question.services'
    ]);
});
