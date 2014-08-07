/**
 * Game App
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/04/24
 */

define([
	'angular',
	'angularLoadingBar',
	'game/Controller',
    'game/Routes'
], function (angular) {
	'use strict';

	return angular.module('Game', [
		'chieffancypants.loadingBar',
		'Game.controllers',
        'Game.routes'
	]);
});
