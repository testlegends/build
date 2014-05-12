/**
 * LabelFilter
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/05/12
 */

define(['angular'], function (angular) {
    'use strict';

    return angular.module('Common.directives', [])

        .directive('tlLabel', [function(){
            return {
                restrict: 'E',
                require: '^tlName',
                scope: {
                    name: '@tlName',
                    type: '&type'
                },
                template: '<span class="label label-{{ type }}">{{ name }}</span>',
                link: function (scope, elem, attrs) {
                    if (scope.name === 'private') {
                        scope.type = 'danger';
                    } else if (scope.name === 'public') {
                        scope.type = 'primary';
                    } else if (scope.name === 'draft') {
                        scope.type = 'warning';
                    } else if (scope.name === 'published') {
                        scope.type = 'success';
                    }
                }
            };
        }])

        .directive('tlName', [function(){
            return {
                restrict: 'A',
                controller: function () {}
            };
        }]);
});
