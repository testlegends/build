/**
 * Theme App
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/05/08
 */

define([
	'angular',
	'angularLoadingBar',
	'common/directives',
	'common/filters',
    'theme/ThemeService',
	'theme/ThemeController',
    'theme/ThemeRoutes'
], function (angular) {
	'use strict';

	return angular.module('Theme', [
		'chieffancypants.loadingBar',
		'Common.directives',
		'Common.filters',
		'Theme.services',
		'Theme.controllers',
        'Theme.routes'
	]);
});
