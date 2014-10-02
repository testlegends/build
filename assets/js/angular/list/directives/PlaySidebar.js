/**
 * PlaySidebar Directives
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/08/03
 */

define(['list/directives', 'list/Service', 'common/services/TestLegendsURL', 'common/services/Loggr', 'jqueryNoUiSlider', 'jqueryKnob'], function (listDirectives) {
    'use strict';

    return listDirectives

        .directive('playSidebar', ['lists', 'TestLegendsURL', 'Loggr', '$location', function (lists, TestLegendsURL, Loggr, $location) {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '/js/angular/list/partials/play-sidebar.html',
                controller: ['$scope', function ($scope) {
                    $scope.gameSettings = {
                        timer: 20,
                        heroHealth: 5
                    };

                    $scope.generateAndPlay = function () {
                        Loggr.log({ action: 'Click Game button' });

                        lists.generateGame({
                            listId: $scope.listId,
                            heroHealth: $scope.gameSettings.heroHealth,
                            timer: $scope.gameSettings.timer,
                            classId: $location.search().cid || $scope.classId
                        }, function (err, data) {
                            window.location.href = TestLegendsURL.app + '/game/' + data.id;
                        });
                    };
                }],
                link: function (scope) {
                    $(".bar-health").noUiSlider({
                        start: 5,
                        step: 1,
                        connect: 'lower',
                        behaviour: 'extend-tap-drag',
                        range: {
                            'min': 1,
                            'max': 6
                        }
                    }).on('slide', function(){
                        console.log(scope.gameSettings);
                        var heroHealth = parseInt($(this).val());
                        scope.gameSettings.heroHealth = heroHealth;
                        $('.noUi-handle').html(heroHealth);
                    });

                    $('.bar-health .noUi-handle').html(5);

                    $('.ring-timer').knob({
                        min: 4,
                        max: 25,
                        step: 1,
                        angleOffset: 30,
                        angleArc: 300,
                        stopper: true,
                        readOnly: false,
                        rotation: 'acw',

                        // cursor: true,
                        thickness: 0.28,
                        lineCap: 'round',
                        width: 150,
                        height: 150,
                        displayInput: true,
                        displayPrevious: false,
                        fgColor: '#FFDA00',
                        bgColor: '#E5E5E5',
                        inputColor: '#8F8F8F',
                        font: 'Varela Round',
                        // fontWeight: '',
                        release: function (val) {
                            scope.gameSettings.timer = val;
                        },
                        draw: function () {
                            var c = this.g;
                            var a = arc(this.cv, this);
                            var r = 1;

                            c.lineWidth = this.lineWidth;
                            c.lineCap = this.lineCap;

                            if (this.o.bgColor !== "none") {
                                c.beginPath();
                                c.strokeStyle = this.o.bgColor;
                                c.arc(this.xy, this.xy, this.radius - 20, this.endAngle - 0.00001, this.startAngle + 0.00001, true);
                                c.stroke();
                            }

                            c.beginPath();
                            c.strokeStyle = r ? this.o.fgColor : this.fgColor;
                            c.arc(this.xy, this.xy, this.radius - 20, a.s, a.e, a.d);
                            c.stroke();

                            var knobSize = 32, offset = -72;
                            var x = getXY(Math.PI - this.startAngle / 2 + this.angle(this.cv), this.o.width - offset, this.o.height - offset).x + offset / 2 + this.o.width / 2;
                            var y = getXY(Math.PI - this.startAngle / 2 + this.angle(this.cv), this.o.width - offset, this.o.height - offset).y + offset / 2 + this.o.height / 2;

                            if (this.o.flip) {
                                x = this.o.width * 2 - x;
                            }

                            c.beginPath();
                            c.arc(x, y, knobSize, 0, 2 * Math.PI, false);
                            c.fillStyle = '#FFBC00';
                            c.fill();

                            this.$c.context.onmousemove = function (e) {
                                var canvas = e.target;
                                var context = canvas.getContext('2d');

                                if (context.isPointInPath(e.x * 2, e.y * 2)) {
                                    canvas.style.cursor = 'pointer';
                                    return;
                                }
                            };

                            return false;

                            function angle(v) {
                                return (v - this.o.min) * this.angleArc / (this.o.max - this.o.min);
                            }

                            function arc(v, p) {
                                var sa, ea;
                                v = p.angle(v);
                                if (p.o.flip) {
                                    sa = p.endAngle + 0.00001;
                                    ea = sa - v - 0.00001;
                                } else {
                                    sa = p.startAngle - 0.00001;
                                    ea = sa + v + 0.00001;
                                }
                                p.o.cursor && (sa = ea - p.cursorExt) && (ea = ea + p.cursorExt);

                                return {
                                    s: sa,
                                    e: ea,
                                    d: p.o.flip && !p.o.cursor
                                };
                            }

                            function getXY(angle, width, height) {
                                var o = angle;
                                if (angle > Math.PI * 3 / 4 && angle < Math.PI * 7 / 4) {
                                    o = Math.PI * 3 / 2 - angle;
                                }

                                var m = Math.sqrt(width * width + height * height) / 2;
                                var r = width / 2;
                                var n = Math.sqrt(m * m + r * r - 2 * m * r * Math.cos(o + Math.PI / 4));
                                var a = Math.PI / 4 - Math.acos((m * m + n * n - r * r) / (2 * m * n));

                                if (angle > Math.PI * 3 / 4 && angle < Math.PI * 7 / 4) {
                                    return {
                                        x: Math.sin(a) * n,
                                        y: Math.cos(a) * n
                                    };
                                } else {
                                    return {
                                        x: Math.cos(a) * n,
                                        y: Math.sin(a) * n
                                    };
                                }
                            }
                        },
                    });
                }
            };
        }]);
});
