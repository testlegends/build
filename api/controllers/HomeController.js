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

    function tl_oauth_request (req, res) {

    }

    function tl_oauth_callback (req, res) {
        res.view(_.extend({
            accessToken: req.user.accessToken
        }, helpers));
    }

    function tl_oauth_logout (req, res) {
        req.logout();
        res.redirect('/');
    }

    return {
        index: index,
        tl_oauth_request: tl_oauth_request,
        tl_oauth_callback: tl_oauth_callback,
        tl_oauth_logout: tl_oauth_logout,

        _config: {}
    };

})();
