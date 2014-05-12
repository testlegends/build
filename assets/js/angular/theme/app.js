/**
 * Theme App
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/05/08
 */

define([
	'angular',
	'angularLoadingBar',
	'theme/ThemeController',
    'theme/ThemeRoutes'
], function (angular) {
	'use strict';

	return angular.module('Theme', [
		'chieffancypants.loadingBar',
		'Theme.controllers',
        'Theme.routes'
	]);
});
