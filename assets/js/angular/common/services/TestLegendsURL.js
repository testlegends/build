/**
 * TestLegendsURL Service
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/08/02
 */

define(['common/services'], function (commonServices) {
    'use strict';

    return commonServices

        .constant('TestLegendsURL', {
            // api: 'https://leejefon.local:1339',
            // app: 'https://leejefon.local:1337',
            // build: 'https://leejefon.local:1336',
            // home: 'https://leejefon.local:1338',
            // mobile: 'https://leejefon.local:1335'

            api: 'https://api.testlegends.com',
            app: 'https://app.testlegends.com',
            build: 'https://build.testlegends.com',
            home: 'https://testlegends.com',
            mobile: 'https://m.testlegends.com'
        });
});
