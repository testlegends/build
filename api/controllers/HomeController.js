/**
 * HomeController
 *
 * @module      :: Controller
 * @description ::
 * @author      :: Jeff Lee
 * @created     :: 2014/02/08
 */

var Html = require('../helpers/HtmlHelper.js'),
    md5 = require('MD5');

module.exports = (function(){

    var helpers = { Html: Html };

	function index (req, res) {
        if (!req.user) {
            return res.redirect('/login');
        }

        if (!req.user.profile_img) {
            req.user.profile_img = 'https://www.gravatar.com/avatar/' + md5(req.user.email);
        }

		return res.view();
	}

    function index_old (req, res) {
        if (!req.user) {
            return res.redirect('/login');
        }

        return res.view('home/index', sails.util.merge(helpers, {
            layout: 'layouts/bootstrap'
        }));
    }

    function oauth_request (req, res) {
        // Do nothing, handled in TestLegendsOAuthRequest policy
    }

    function oauth_callback (req, res) {
        var sixHours = 6 * 60 * 60 * 1000;

        res.cookie('access_token', req.user.accessToken, { maxAge: sixHours });
        res.cookie('user', JSON.stringify({
            id: req.user.id,
            name: req.user.name,
            role: req.user.role,
            email: req.user.email
        }), { maxAge: sixHours });

        res.redirect('/user/login'); // /user/login Handles the after login random stuff
    }

    function oauth_logout (req, res) {
        req.logout();
        res.clearCookie('access_token');
        res.clearCookie('user');
        res.redirect(process.env.TESTLEGENDS_OAUTH_SERVER_URL + '/user/logout');
    }

    return {
        index: index,
        index_old: index_old,
        oauth_request: oauth_request,
        oauth_callback: oauth_callback,
        oauth_logout: oauth_logout,

        _config: {}
    };

})();
