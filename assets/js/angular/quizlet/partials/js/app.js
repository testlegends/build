/**
 * Quizlet.app
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/06/24
 */

require.config({
    baseUrl: '/js/angular',
    paths: {
        jquery: "//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min"
    },
    shim: {

    }
});

require([
    'jquery'
], function ($) {
    (function ($) {

        $.fn.bindr = function (config) {
            config = $.extend({
                target: null
            }, config);

            var input = $(this);
            var target = $(config.target);

            input.keyup(function(e){
                var code = (e.keyCode ? e.keyCode : e.which);
                if (code === 13) {
                    target.click();
                }
            });
        };

    })(jQuery);

    $(document).ready(function(){
        $('#quizlet_search').bindr({
            target: '#quizlet_search_btn'
        });
    });
});
