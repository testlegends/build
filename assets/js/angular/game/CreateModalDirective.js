/**
 * CreateModalDirective
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/05/12
 */

define(['game/directives', 'bootstrap'], function (gameDirectives) {
    'use strict';

    return gameDirectives

        .directive('gameCreateModal', [function () {
            return {
                restrict: 'E',
                replace: true,
                scope: true,
                templateUrl: '/js/angular/game/partials/createModal.html',
                controller: ['$scope', 'games', function ($scope, games) {
                    $scope.createGame = function () {
                        games.create({
                            name: $scope.newGameName,
                            scope: $scope.newGameScope
                        }, function (response) {
                            $('#gameCreateModal').modal('hide');
                            $('body').removeClass('modal-open');
                            $('.modal-backdrop').remove();

                            if (response.err) {
                                toastr.error(response.msg);
                            } else {
                                toastr.success('Game successfully created!');
                                $scope.$parent.games.push(response.data);
                            }
                        });
                    };
                }],
                link: function (scope, elem, attrs) {
                    $('#newGameScope .btn').click(function(){
                        scope.newGameScope = $(this).children('input').first().val();
                    });
                }
            };
        }]);
});
