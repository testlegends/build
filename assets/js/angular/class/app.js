/**
 * Class App
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/08/21
 */

define([
	'angular',
	'angularLoadingBar',
	'common/filters/Gravatar',
	'class/directives/ClassSidebar',
	'class/directives/StudentSidebar',
	'class/directives/AddClassPopup',
	'class/directives/AddListPopup',
	'class/directives/AddStudentPopup',
	'class/directives/InviteCodePopup',
	'class/directives/JoinClassPopup',
	'class/directives/StatsPopup',
	'class/Controller',
    'class/Routes'
], function (angular) {
	'use strict';

	return angular.module('Class', [
		'chieffancypants.loadingBar',
		'Common.filters',
		'Class.directives',
		'Class.controllers',
        'Class.routes'
	]);
});
