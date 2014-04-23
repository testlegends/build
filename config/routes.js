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

    '/': {
        controller: 'home',
        action: 'index'
    },

    '/oauth': {
        controller: 'home',
        action: 'tl_oauth_request'
    },

    '/oauth/callback': {
        controller: 'home',
        action: 'tl_oauth_callback'
    },

    '/oauth/logout': {
        controller: 'home',
        action: 'tl_oauth_logout'
    }

};
