/**
 * QuestionDirectives
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/05/12
 */

define(['angular', 'angularUISelect2', 'game/Service', 'question/Service'], function (angular) {

    return angular.module('Question.directives', ['ui.select2', 'Game.services', 'Question.services']);

});
