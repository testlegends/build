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
            api: 'http://leejefon.local:1339',
            app: 'http://leejefon.local:1337',
            build: 'http://leejefon.local:1336',
            home: 'http://leejefon.local:1338',
            mobile: 'http://leejefon.local:1335'

            // api: 'http://api.testlegends.com',
            // app: 'http://app.testlegends.com',
            // build: 'http://build.testlegends.com',
            // home: 'http://testlegends.com',
            // mobile: 'http://m.testlegends.com'
        });
});
