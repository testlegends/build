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

    'GET /help'         : 'HomeController.help',
    'GET /logs'         : 'LoggrController.index',
    'PUT /log'          : 'LoggrController.add',

    'GET /login'        : 'HomeController.oauth_request',
    'GET /logout'       : 'HomeController.oauth_logout',

    '/oauth'            : 'HomeController.oauth_request',
    '/oauth/logout'     : 'HomeController.oauth_logout',
    '/oauth/callback'   : 'HomeController.oauth_callback',

    '/quizlet/login'    : 'QuizletController.login',
    '/quizlet/callback' : 'QuizletController.oauth_callback',
    '/quizlet/search'   : 'QuizletController.search',

    // Angular Routes
    '/'                        : 'HomeController.index',
    '/list/:id'                : 'HomeController.index',
    '/import'                  : 'HomeController.index',
    '/import/:id'              : 'HomeController.index',
    '/class/:id'               : 'HomeController.index',
    // '/classes'                 : 'HomeController.index',
    // '/class/:id/students'      : 'HomeController.index',
    // '/class/:id/student/:sid'  : 'HomeController.index',
    // '/class/:id/overview'      : 'HomeController.index',

    '/games'                   : 'HomeController.index_old',
    '/game/:id/questions'      : 'HomeController.index_old',
    '/game/:id/questions/edit' : 'HomeController.index_old',
    '/game/:id/items'          : 'HomeController.index_old',
    '/game/:id/theme'          : 'HomeController.index_old',
    '/user'                    : 'HomeController.index_old',
    '/user/login'              : 'HomeController.index',
    '/user/logout'             : 'HomeController.index'

};
