/**
 * QuizletController
 *
 * @module      :: Controller
 * @description ::
 * @author      :: Jeff Lee
 * @created     :: 2014/06/24
 */

var Html = require('../helpers/HtmlHelper.js');

module.exports = (function(){

    var helpers = { Html: Html };

    function login (req, res) {
        return res.redirect(QuizletService.getAuthorizeUrl());
    }

    function loggedIn (req, res) {
        if (!req.session.quizlet) {
            return res.json({
                loggedIn: false
            });
        } else {
            return res.json({
                loggedIn: true
            });
        }
    }

    function oauth_callback (req, res) {
        if (req.query && req.query.code) {
            QuizletService.getAccessToken(req.query.code, function (err, data) {
                req.session.quizlet = {
                    username: data.user_id,
                    access_token: data.access_token
                };

                return res.redirect('/quizlet');
            });
        } else {
            return res.redirect('/');
        }
    }

    function search (req, res) {
        var query = req.query.q;
        var page = req.query.page || 1;
        var per_page = req.query.per_page || 30;

        if (!isNaN(parseFloat(query)) && isFinite(query)) {
            QuizletService.getSetById(id, function (err, result) {
                return res.json({
                    search: query,
                    result: {
                        total: 1,
                        pages: 1,
                        page: 1,
                        sets: [result]
                    }
                });
            });
        } else {
            QuizletService.searchSets({
                query: query,
                page: page,
                per_page: per_page
            }, function (err, result) {
                return res.json({
                    search: query,
                    result: result
                });
            });
        }
    }

    return {
        login: login,
        loggedIn: loggedIn,
        oauth_callback: oauth_callback,
        search: search
    };
})();
