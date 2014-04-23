/**
 * TestLegendsOAuthRequest
 *
 * @module      :: Policy
 * @description ::
 * @docs        :: https://github.com/coolaj86/example-oauth2orize-consumer
 * @author      :: Jeff Lee
 * @created     :: 2014/04/21
 */

var Passport = require('passport');

module.exports = Passport.authenticate('TestLegendsAPI', { scope: '*' });
