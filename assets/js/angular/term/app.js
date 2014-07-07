/**
 * Term App
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/07/06
 */

define([
	'angular',
	'angularLoadingBar',
	'term/Controller',
    'term/Routes'
], function (angular) {
	'use strict';

	return angular.module('Term', [
		'chieffancypants.loadingBar',
		'Term.controllers',
        'Term.routes'
	]);
});
