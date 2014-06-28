/**
 * Tracker Plugin
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/06/24
 */

(function($){

    $.fn.trackr = function (config) {
        config = $.extend({

        }, config);
    };

}(jQuery));


$.trackr({
    name: 'app',
    server: 'http://testlegends.com/tracker',
    trackers: [
        {
            element: 'ji',
            event: 'click'
        },
        {
            url: ''
        }
    ]
});
