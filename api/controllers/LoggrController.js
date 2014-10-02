/**
 * LoggrController
 *
 * @module      :: Controller
 * @description ::
 * @author      :: Jeff Lee
 * @created     :: 2014/10/01
 */

module.exports = (function(){

    function index (req, res) {
        Loggr.find().done(function (err, data) {
            return res.json({
                status: 'OK',
                data: data
            });
        });
    }

    function add (req, res) {
        if (req.body.action) {
            var action = req.body.action;
            var user = req.body.user;

            Loggr.create({
                action: action,
                user: user
            }, function (err, data) {
                return res.json({
                    status: 'OK'
                });
            });
        } else {
            return res.json();
        }
    }

    return {
        index: index,
        add: add
    };
})();
