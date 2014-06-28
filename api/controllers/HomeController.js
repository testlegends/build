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
        res.cookie('access_token', req.user.accessToken, {
            maxAge: 90000000
        });
        res.redirect('/');
    }

    function oauth_loggedIn (req, res) {

    }

    function oauth_logout (req, res) {
        req.logout();
        res.clearCookie('access_token');
        res.redirect('/');
    }

    return {
        index: index,
        oauth_request: oauth_request,
        oauth_callback: oauth_callback,
        oauth_loggedIn: oauth_loggedIn,
        oauth_logout: oauth_logout,

        _config: {}
    };

})();
