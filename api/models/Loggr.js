/**
 * Loggr
 *
 * @module      :: Model
 * @description ::
 * @author      :: Jeff Lee
 * @created     :: 2014/10/01
 */

module.exports = (function(){

    var tableName = 'loggr';

    var attributes = {
        user: {
            type: 'json'
        },
        action: {
            type: 'json'
        }
    };

    if (process.env.NODE_ENV === 'development') {
        tableName += '_test';
    }

    return {
        tableName: tableName,
        attributes: attributes
    };
})();
