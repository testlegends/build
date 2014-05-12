/**
 * Passport
 *
 * @description ::
 * @docs        :: https://github.com/coolaj86/example-oauth2orize-consumer
 * @author      :: Jeff Lee
 * @created     :: 2014/04/21
 */

var util = require('util'),
    Passport = require('passport'),
    OAuth2Strategy = require('passport-oauth').OAuth2Strategy,
    InternalOAuthError = require('passport-oauth').InternalOAuthError;

var oauth = {
    resourceOwner: {
        authURL: process.env.TESTLEGENDS_OAUTH_SERVER_URL + '/oauth/authorize',
        tokenURL: process.env.TESTLEGENDS_OAUTH_SERVER_URL + '/oauth/token'
    },
    resourceServer: {
        url: process.env.TESTLEGENDS_API_SERVER_URL
    },
    client: {
        clientID: process.env.TESTLEGENDS_API_CLIENT_ID,
        clientSecret: process.env.TESTLEGENDS_API_CLIENT_SECRET,
        callbackURL: process.env.PROJECT_URL + '/oauth/callback'
    }
};

Passport.serializeUser(function (user, done) {
    done(null, user);
});

Passport.deserializeUser(function (user, done) {
    done(null, user);
});

var TestLegendsStrategy = (function(){
    function Strategy (options, verify) {
        var me = this;

        options = options || {};
        options.authorizationURL =
            options.authorizationURL ||
            options.authorizationUrl ||
            oauth.resourceOwner.authURL;

        options.tokenURL =
            options.tokenURL ||
            options.tokenUrl ||
            oauth.resourceOwner.tokenURL;

        OAuth2Strategy.call(me, options, verify);

        me.name = 'TestLegendsAPI';
    }

    util.inherits(Strategy, OAuth2Strategy);

    Strategy.prototype.userProfile = function (accessToken, done) {
        var me = this;

        me._oauth2.get(oauth.resourceServer.url + '/user', accessToken, function (err, body/*, res*/) {
            var json, profile = {};

            if (err) { return done(new InternalOAuthError('failed to fetch user profile', err)); }

            if ('string' === typeof body) {
                try { json = JSON.parse(body); }
                catch(e) { done(e); return; }
            } else if ('object' === typeof body) {
                json = body;
            }

            profile.user = json.name;
            profile.provider = me.name;
            profile._raw = body;
            profile._json = json;

            done(null, profile);
        });
    };

    return Strategy;

})();

Passport.use(new TestLegendsStrategy(oauth.client, function (accessToken, refreshToken, profile, done) {
    return done(null, {
        name: profile._json.name,
        accessToken: accessToken
    });
}));

module.exports = {
    express: {
        customMiddleware: function (app) {
            app.use(Passport.initialize());
            app.use(Passport.session());
        }
    }
};
