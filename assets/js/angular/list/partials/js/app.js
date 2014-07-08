/**
 * List.app
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/06/24
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
});
