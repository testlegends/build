var util = require('util'),
    Passport = require('passport'),
    OAuth2Strategy = require('passport-oauth').OAuth2Strategy,
    InternalOAuthError = require('passport-oauth').InternalOAuthError;

Passport.serializeUser(function(user, done) {
    done(null, user);
});

Passport.deserializeUser(function(obj, done) {
    var user = obj;
    done(null, user);
});

var TestLegendsStrategy = (function(){
    var oauth = {
        resourceOwner: {
            authURL: 'http://testlegends.herokuapp.com/oauth/authorize',
            tokenURL: 'http://testlegends.herokuapp.com/oauth/token'
            // authURL: 'http://localhost:1338/oauth/authorize',
            // tokenURL: 'http://localhost:1338/oauth/token'
        },
        resourceServer: {
            url: 'http://api.testlegends.com'
            // url: 'http://localhost:1339'
        }
    };

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

        me._oauth2.get(oauth.resourceServer.url + '/player', accessToken, function (err, body/*, res*/) {
            var json, profile = {};

            if (err) { return done(new InternalOAuthError('failed to fetch user profileyyyy', err)); }

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

Passport.use(new TestLegendsStrategy({
    clientID: '1',
    clientSecret: 'hellosecret',
    callbackURL: 'http://app.testlegends.com/oauth/callback'
    // callbackURL: 'http://localhost:1337/oauth/callback'
}, function (accessToken, refreshToken, profile, done) {
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
