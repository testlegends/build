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

    '/login'          : 'HomeController.oauth_request',
    '/logout'         : 'HomeController.oauth_logout',

    '/oauth'          : 'HomeController.oauth_request',
    '/oauth/logout'   : 'HomeController.oauth_logout',
    '/oauth/callback' : 'HomeController.oauth_callback',

    '/quizlet/login'    : 'QuizletController.login',
    '/quizlet/callback' : 'QuizletController.oauth_callback',
    '/quizlet/search'   : 'QuizletController.search',

    // Angular Routes
    '/'                        : 'HomeController.index', // (1)
    '/list/:id'                : 'HomeController.index', // (3)
    '/import'                  : 'HomeController.index', // (6)
    '/import/:id'              : 'HomeController.index', // (7)
    '/games'                   : 'HomeController.index',
    '/game/:id/questions'      : 'HomeController.index',
    '/game/:id/questions/edit' : 'HomeController.index',
    '/game/:id/items'          : 'HomeController.index',
    '/game/:id/theme'          : 'HomeController.index',
    '/track'                   : 'HomeController.index',
    '/user'                    : 'HomeController.index',
    '/user/login'              : 'HomeController.index',
    '/user/logout'             : 'HomeController.index'

};
