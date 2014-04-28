/**
 * Game App
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/04/24
 */

define([
	'angular',
	'angularLoadingBar',
	'common/directives',
	'common/filters',
    'game/GameService',
	'game/GameController',
    'game/GameRoutes'
], function (angular) {
	'use strict';

	return angular.module('app', [
		'chieffancypants.loadingBar',
		'Common.directives',
		'Common.filters',
		'Game.services',
		'Game.controllers',
        'Game.routes'
	]);
});
