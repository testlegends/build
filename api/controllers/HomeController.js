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
		return res.view(helpers);
	}

    function oauth_request (req, res) {
        // Do nothing, handled in TestLegendsOAuthRequest policy
    }

    function oauth_callback (req, res) {
        var thirtyMinutes = 30 * 60 * 1000;

        res.cookie('access_token', req.user.accessToken, { maxAge: thirtyMinutes });
        res.cookie('user', JSON.stringify({
            id: req.user.id,
            role: req.user.role,
            email: req.user.email
        }), { maxAge: thirtyMinutes });

        res.redirect('/user/login');
    }

    function oauth_logout (req, res) {
        req.logout();
        res.clearCookie('access_token');
        res.clearCookie('user');
        res.redirect('/');
    }

    return {
        index: index,
        oauth_request: oauth_request,
        oauth_callback: oauth_callback,
        oauth_logout: oauth_logout,

        _config: {}
    };

})();
