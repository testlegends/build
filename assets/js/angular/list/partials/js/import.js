/**
 * import.js
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/08/13
 */

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
    $('#list_search').bindr({
        target: '#list_search_btn'
    });

    // TODO: need to find a better way to do this
    $('#library-nav').removeClass('active-nav');
    $('#import-nav').addClass('active-nav');
});
