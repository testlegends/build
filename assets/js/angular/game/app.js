/**
 * Game App
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/04/24
 */

define([
	'angular',
	'angularLoadingBar',
    'common/LabelDirective',
	'game/GameController',
    'game/GameRoutes'
], function (angular) {
	'use strict';

	return angular.module('Game', [
		'chieffancypants.loadingBar',
        'Common.directives',
		'Game.controllers',
        'Game.routes'
	]);
});
