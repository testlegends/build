/**
 * HomeController
 *
 * @module      :: Controller
 * @description ::
 * @author      :: Jeff Lee
 * @created     :: 2014/02/08
 */

var Html = require('../helpers/HtmlHelper.js');

module.exports = (function(){

    var helpers = { Html: Html };

	function index (req, res) {
		return res.view({
			Html: Html
		});
	}

    function quizlet (req, res) {
        if (!req.session.quizlet) {
            return res.redirect(QuizletService.getAuthorizeUrl());
        }

        QuizletService.search('physics class', function (err, result) {
            return res.json({
                search: 'physics class',
                result: result
            });
        });
    }

    function tl_oauth_request (req, res) {
        // Do nothing, handled in TestLegendsOAuthRequest policy
    }

    function tl_oauth_callback (req, res) {
        res.cookie('access_token', req.user.accessToken, {
            maxAge: 90000000
        });
        res.redirect('/');
    }

    function tl_oauth_logout (req, res) {
        req.logout();
        res.clearCookie('access_token');
        res.redirect('/');
    }

    function quizlet_oauth_callback (req, res) {
        if (req.query && req.query.code) {
            QuizletService.getAccessToken(req.query.code, function (data) {
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

    return {
        index: index,
        quizlet: quizlet,

        tl_oauth_request: tl_oauth_request,
        tl_oauth_callback: tl_oauth_callback,
        tl_oauth_logout: tl_oauth_logout,

        quizlet_oauth_callback: quizlet_oauth_callback,

        _config: {}
    };

})();
