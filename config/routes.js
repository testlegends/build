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
    '/quizlet' : 'HomeController.index',
    '/track'   : 'HomeController.index',

    '/oauth'         : 'HomeController.oauth_request',
    '/oauth/callback': 'HomeController.oauth_callback',
    '/oauth/logout'  : 'HomeController.oauth_logout',

    '/quizlet/login'    : 'QuizletController.login',
    '/quizlet/loggedIn' : 'QuizletController.loggedIn',
    '/quizlet/callback' : 'QuizletController.oauth_callback',
    '/quizlet/search'   : 'QuizletController.search'
};
