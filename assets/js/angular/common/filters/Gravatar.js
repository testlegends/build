/**
 * Gravatar Filter
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/09/13
 */

define(['common/filters', 'common/services/MD5'], function (commonFilters) {
    'use strict';

    return commonFilters

        .filter('gravatar', ['MD5', function (MD5) {
            return function (email, size) {
                var gravatar_url = 'https://www.gravatar.com/avatar/';
                return gravatar_url + MD5.createHash(email) + '?size=' + (size || 80);
            };
        }]);
});
