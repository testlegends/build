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
        get: function (uri, query, auth, cb) {
            if (typeof auth === 'function') {
                cb = auth;
                auth = false;
            }

            if (auth) {
                var headers = { 'Authorization': oauth2.buildAuthHeader(access_token) };
                uri = oauth.resourceServer.url + uri + '?' + Object.keys(query).map(function (key) {
                    return encodeURIComponent(key) + '=' + encodeURIComponent(query[key]);
                }).join('&');
                oauth2._request("GET", uri, headers, null, access_token, cb);
            } else {
                query.client_id = oauth.client.clientID;
                uri = oauth.resourceServer.url + uri + '?' + Object.keys(query).map(function (key) {
                    return encodeURIComponent(key) + '=' + encodeURIComponent(query[key]);
                }).join('&');
                oauth2._request("GET", uri, null, null, null, cb);
            }
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

    var access_token = null;

    var state = null;

    function getAuthorizeUrl () {
        var authUrl = oauth2.getAuthorizeUrl({
            response_type: 'code',
            redirect_uri: oauth.client.callbackURL,
            scope: 'read',
            state: _getState()
        });

        return authUrl;
    }

    function getAccessToken (code, cb) {
        oauth2.getOAuthAccessToken(code,
            {
                grant_type: 'authorization_code',
                redirect_uri: oauth.client.callbackURL
            },
            function (err, token, refresh_token, results) {
                access_token = token;
                cb(err, results);
            }
        );
    }

    function _getState (length) {
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

    function searchSets (params, cb) {
        http.get('/search/sets', { q: params.query, page: params.page, per_page: params.per_page }, function (err, result) {
            cb(err, _sanitizeResult(result));
        });
    }

    function getSetById (id, cb) {
        http.get('/sets/' + id, {}, function (err, result) {
            cb(err, _sanitizeSet(result));
        });
    }

    function _sanitizeResult (result) {
        if (typeof result === 'string') {
            result = JSON.parse(result);
        }

        var sanitizedSets = [];
        for (var i in result.sets) {
            sanitizedSets.push(_sanitizeSet(result.sets[i]));
        }

        return {
            total: result.total_results,
            pages: result.total_pages,
            page: result.page,
            sets: sanitizedSets
        };
    }

    function _sanitizeSet (set) {
        if (typeof set === 'string') {
            set = JSON.parse(set);
        }

        return {
            id: set.id,
            title: set.title,
            desc: set.description,
            terms: set.terms
        };
    }

    function generateQuestions () {

    }

    return {
        getAuthorizeUrl: getAuthorizeUrl,
        getAccessToken: getAccessToken,
        searchSets: searchSets,
        getSetById: getSetById,
        generateQuestions: generateQuestions
    };
})();
