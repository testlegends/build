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
    '/loggedIn'       : 'HomeController.oauth_loggedIn',
    '/logout'         : 'HomeController.oauth_logout',

    '/oauth'          : 'HomeController.oauth_request',
    '/oauth/loggedIn' : 'HomeController.oauth_loggedIn',
    '/oauth/callback' : 'HomeController.oauth_callback',
    '/oauth/logout'   : 'HomeController.oauth_logout',

    '/quizlet/login'    : 'QuizletController.login',
    '/quizlet/loggedIn' : 'QuizletController.loggedIn',
    '/quizlet/callback' : 'QuizletController.oauth_callback',
    '/quizlet/search'   : 'QuizletController.search',

    '/'            : 'HomeController.index',
    '/games'       : 'HomeController.index',
    '/game/:id'    : 'HomeController.index',
    '/themes'      : 'HomeController.index',
    '/quizlet'     : 'HomeController.index',
    '/quizlet/:id' : 'HomeController.index',
    '/track'       : 'HomeController.index'

};
