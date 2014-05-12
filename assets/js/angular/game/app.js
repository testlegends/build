/**
 * Game App
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/04/24
 */

define([
	'angular',
	'angularLoadingBar',
    'game/GameService',
	'game/GameController',
    'game/GameRoutes'
], function (angular) {
	'use strict';

	return angular.module('Game', [
		'chieffancypants.loadingBar',
		'Game.services',
		'Game.controllers',
        'Game.routes'
	]);
});
