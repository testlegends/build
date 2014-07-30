/**
 * TrackController
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/05/08
 */

define(['angular', 'track/Service'], function (angular) {
	'use strict';

	return angular.module('Track.controllers', ['Track.services'])

		.controller('TrackController', ['$scope', 'track', function ($scope, track) {

            $scope.name = "TrackController";

		}]);
});
