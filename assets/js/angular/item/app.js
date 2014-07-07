/**
 * Item App
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/07/06
 */

define([
	'angular',
	'angularLoadingBar',
	'item/Controller',
    'item/Routes'
], function (angular) {
	'use strict';

	return angular.module('Item', [
		'chieffancypants.loadingBar',
		'Item.controllers',
        'Item.routes'
	]);
});
