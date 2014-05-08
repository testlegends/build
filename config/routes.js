/**
 * Routes
 *
 * Sails uses a number of different strategies to route requests.
 * Here they are top-to-bottom, in order of precedence.
 *
 * For more information on routes, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.routes = {

    '/':          'HomeController.index',
    '/questions': 'HomeController.index',
    '/themes':    'HomeController.index',

    '/oauth':          'HomeController.tl_oauth_request',
    '/oauth/callback': 'HomeController.tl_oauth_callback',
    '/oauth/logout':   'HomeController.tl_oauth_logout'

};
