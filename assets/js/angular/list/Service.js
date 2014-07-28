/**
 * ListServices
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/06/24
 */

define(['angular', 'common/services/TestLegendsAPI'], function (angular) {
	'use strict';

	return angular.module('List.services', ['Common.services'])

		.factory('lists', ['TestLegendsAPI', function ($TestLegendsAPI) {
			return {
				search: function (params, cb) {

				},
				generate: function (cb) {

				},
				getList: function (id, cb) {
					$TestLegendsAPI({
						url: '/list/' + id,
						method: 'GET'
					}).success(function (response) {
						if (response.status === 'OK') {
							cb(null, response.data);
						} else {
							cb(response.error, null);
						}
					});
				},
				getLists: function (cb) {
					$TestLegendsAPI({
						url: '/lists',
						method: 'GET'
					}).success(function (response) {
						if (response.status === 'OK') {
							cb(null, response.data);
						} else {
							cb(response.error, null);
						}
					});
				},
				create: function (params, cb) {
					if (typeof params === 'function') {
						cb = params;
						params = {
							title: 'New List',
							desc: 'New List',
							terms: []
						};

					}

					$TestLegendsAPI({
						url: '/lists',
						method: 'PUT',
						data: {
							title: params.title,
							desc: params.desc,
							terms: params.terms
						}
					}).success(function (response) {
						if (response.status === 'OK') {
							cb(null, response.data);
						} else {
							cb(response.error, null);
						}
					});
				},
				save: function (params, cb) {
					$TestLegendsAPI({
						url: '/list/' + params.id,
						method: 'POST',
						data: {
							title: params.title,
							desc: params.desc,
							terms: params.terms
						}
					}).success(function (response) {
						if (response.status === 'OK') {
							cb(null, response.data);
						} else {
							cb(response.error, null);
						}
					});
				},
				delete: function (id, cb) {
					$TestLegendsAPI({
						url: '/list/' + id,
						method: 'DELETE'
					}).success(function (response) {
						if (response.status === 'OK') {
							cb(null);
						} else {
							cb(response.error);
						}
					});
				}
			};
		}]);
});
