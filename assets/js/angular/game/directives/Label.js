/**
 * GameLabelDirective
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/05/12
 */

define(['game/directives'], function (gameDirectives) {
    'use strict';

    return gameDirectives

        .directive('tlLabel', [function(){
            return {
                restrict: 'E',
                require: '^tlName',
                template: '<span class="label label-{{ type }}">{{ name }}</span>',
                scope: {
                    name: '@tlName',
                    type: '&type'
                },
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
