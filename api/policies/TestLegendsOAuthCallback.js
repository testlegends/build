
var Passport = require('passport');

module.exports = Passport.authenticate('TestLegendsAPI', { failureRedirect: '/?error=foo' });
