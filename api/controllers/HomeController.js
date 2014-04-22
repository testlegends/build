/**
 * HomeController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
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

    return {
        index: index,
        tl_oauth_request: tl_oauth_request,
        tl_oauth_callback: tl_oauth_callback,

        _config: {}
    };

})();
