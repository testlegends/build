/**
 * TermFilters
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/08/14
 */

define(['angular'], function (angular) {
    'use strict';

    return angular.module('Term.filters', [])

        .filter('GreyOutOptions', ['$sce', function ($sce) {
            return function (terms_raw) {
                if (!terms_raw) {
                    return;
                }

                var terms = terms_raw.split(",");
                var str = terms[0] + "<span class='grey'>";

                for (var i = 1; i < terms.length; i++) {
                    str += "<br />" + terms[i];
                }

                str += '</span>';

                return $sce.trustAsHtml(str);
            };
        }])

        .filter('StyleNumber', ['$sce', function ($sce) {
            return function (terms_raw) {
                if (!terms_raw) {
                    return;
                }

                var terms = terms_raw.split(" ");
                var str = '';

                for (var i in terms) {
                    if (isNaN(terms[i])) {
                        str += terms[i] + ' ';
                    } else {
                        str += '<span class="number">' + terms[i] + '</span>';
                    }
                }

                return str;
            };
        }]);
});
