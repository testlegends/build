/**
 * Class App
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/08/21
 */

define([
	'angular',
	'angularLoadingBar',
	'class/directives/ClassSidebar',
	'class/directives/StudentSidebar',
	'class/Controller',
    'class/Routes'
], function (angular) {
	'use strict';

	return angular.module('Class', [
		'chieffancypants.loadingBar',
		'Class.directives',
		'Class.controllers',
        'Class.routes'
	]);
});
