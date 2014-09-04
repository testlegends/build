/**
 * ClassService
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/08/21
 */

define(['angular', 'common/services/TestLegendsAPI', 'common/services/Auth'], function (angular) {
	'use strict';

	return angular.module('Class.services', ['Common.services'])

		.factory('classes', ['TestLegendsAPI', 'Auth', function (TestLegendsAPI, Auth) {
			return {
				findClass: function (id, cb) {
					TestLegendsAPI
						.get('/class/' + id)
						.success(function (data) {
							cb(null, data.data);
						});
				},

				getClasses: function (cb) {
					TestLegendsAPI
						.get('/classes')
						.success(function (data) {
							cb(null, data.data);
						});
				},

				getLists: function (classId, cb) {
					TestLegendsAPI
						.get('/class/' + classId + '/lists')
						.success(function (response) {
							if (response.status === 'OK') {
								cb(null, response.data);
							} else {
								cb(response.data);
							}
						});
				},

				getStudents: function (classId, cb) {
					TestLegendsAPI
						.get('/class/' + classId + '/students')
						.success(function (response) {
							if (response.status === 'OK') {
								cb(null, response.data);
							} else {
								cb(response.data);
							}
						});
				},

				addClass: function (params, cb) {
					TestLegendsAPI
						.put('/classes', {
							name: params.name,
							desc: params.desc
						})
						.success(function (response) {
							if (response.status === 'OK') {
								cb(null, response.data);
							} else {
								cb(response.data);
							}
						});
				},

				addList: function (params, cb) {
					TestLegendsAPI
						.put('/class/' + params.classId + '/lists', {
							listId: params.listId
						})
						.success(function (response) {
							if (response.status === 'OK') {
								cb(null, response.data);
							} else {
								cb(response.data);
							}
						});
				},

				addStudent: function (params, cb) {
					TestLegendsAPI
						.put('/class/' + params.classId + '/students', {
							email: params.studentEmail || Auth.user().email
						})
						.success(function (response) {
							if (response.status === 'OK') {
								cb(null, response.data);
							} else {
								cb(response.data);
							}
						});
				},

				removeClass: function (classId, cb) {
					TestLegendsAPI
						.delete('/class/' + classId)
						.success(function (response) {
							if (response.status === 'OK') {
								cb(null, response.data);
							} else {
								cb(response.data);
							}
						});
				},

				removeList: function (params, cb) {
					TestLegendsAPI
						.delete('/class/' + params.classId + '/list/' + params.listId)
						.success(function (response) {
							if (response.status === 'OK') {
								cb(null, response.data);
							} else {
								cb(response.data);
							}
						});
				},

				removeStudent: function (params, cb) {
					TestLegendsAPI
						.delete('/class/' + params.classId + '/student/' + params.studentId)
						.success(function (response) {
							if (response.status === 'OK') {
								cb(null, response.data);
							} else {
								cb(response.data);
							}
						});
				}
			};
		}]);
});
