/**
 * Game App
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/04/24
 */

define([
	'angular',
	'angularRoute',
	'angularLoadingBar',
	'common/directives',
	'common/filters',
    'game/GameService',
	'game/GameController'
], function (angular) {
	'use strict';

	return angular.module('app', [
		'ngRoute',
		'chieffancypants.loadingBar',
		'Common.directives',
		'Common.filters',
		//'Game.filters',
		'Game.services',
		'Game.controllers'
	]);
});
