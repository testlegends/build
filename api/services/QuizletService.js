/**
 * QuizletService
 *
 * @module      :: Service
 * @description ::
 * @docs        :: https://quizlet.com/api/2.0/docs
 * @author      :: Jeff Lee
 * @created     :: 2014/05/22
 */

var OAuth2 = require('oauth').OAuth2;

module.exports = (function(){

    var oauth = {
        resourceOwner: {
            authURL: 'https://quizlet.com/authorize',
            tokenURL: 'https://api.quizlet.com/oauth/token'
        },
        resourceServer: {
            url: 'https://api.quizlet.com/2.0'
        },
        client: {
            clientID: process.env.QUIZLET_API_CLIENT_ID,
            clientSecret: process.env.QUIZLET_API_CLIENT_SECRET,
            callbackURL: process.env.PROJECT_URL + '/quizlet/callback'
        }
    };

    var oauth2 = new OAuth2(
        oauth.client.clientID,
        oauth.client.clientSecret,
        "", // no baseUrl because auth and token url are on different domains
        oauth.resourceOwner.authURL,
        oauth.resourceOwner.tokenURL
    );

    var http = {
        get: function (uri, query, cb) {
            var headers = { 'Authorization': oauth2.buildAuthHeader(access_token) };
            uri = oauth.resourceServer.url + uri + '?' + Object.keys(query).map(function (key) {
                return encodeURIComponent(key) + '=' + encodeURIComponent(query[key]);
            }).join('&');
            oauth2._request("GET", uri, headers, null, access_token, cb);
        },
        put: function (uri, data, cb) {
            var headers= { 'Authorization': oauth2.buildAuthHeader(access_token) };
            uri = uri = oauth.resourceServer.url + uri;
            oauth2._request("PUT", uri, headers, data, access_token, cb);
        },
        post: function (uri, data, cb) {
            var headers= { 'Authorization': oauth2.buildAuthHeader(access_token) };
            uri = uri = oauth.resourceServer.url + uri;
            oauth2._request("POST", uri, headers, data, access_token, cb);
        },
        delete: function (uri, id, cb) {
            var headers= { 'Authorization': oauth2.buildAuthHeader(access_token) };
            uri = uri = oauth.resourceServer.url + uri;
            oauth2._request("DELETE", uri, headers, null, access_token, cb);
        }
    };

    var state = null;

    var access_token = null;

    function getAuthorizeUrl () {
        var authUrl = oauth2.getAuthorizeUrl({
            response_type: 'code',
            redirect_uri: oauth.client.callbackURL,
            scope: 'read',
            state: getState()
        });

        return authUrl;
    }

    function getAccessToken (code, cb) {
        oauth2.getOAuthAccessToken(code,
            {
                grant_type: 'authorization_code',
                redirect_uri: oauth.client.callbackURL
            },
            function (err, access_token, refresh_token, results) {
                access_token = access_token;
                cb(results);
            }
        );
    }

    function search (query, cb) {
        http.get('/search/classes', { q: query }, function (err, result) {
            cb(err, result);
        });
    }

    function getState (length) {
        if (state) {
            return state;
        }

        if (!length) {
            length = 5;
        }

        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < length; i++) {
            state += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return state;
    }

    return {
        getAuthorizeUrl: getAuthorizeUrl,
        getAccessToken: getAccessToken,
        search: search
    };
})();
