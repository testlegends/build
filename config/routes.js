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

    '/'        : 'HomeController.index',
    '/games'   : 'HomeController.index',
    '/game/:id': 'HomeController.index',
    '/themes'  : 'HomeController.index',

    '/oauth'         : 'HomeController.tl_oauth_request',
    '/oauth/callback': 'HomeController.tl_oauth_callback',
    '/oauth/logout'  : 'HomeController.tl_oauth_logout',

    '/quizlet'         : 'HomeController.quizlet',
    '/quizlet/callback': 'HomeController.quizlet_oauth_callback'
};
