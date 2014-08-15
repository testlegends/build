/**
 * index.js
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/08/14
 */

$(document).ready(function(){
    $('.icon-image').click(function(e){
        e.stopPropagation();
        $('.menu-icon').show();
    });

    $(document).click(function(){
        var $menu = $('.menu-icon');

        if ($menu.is(':visible')) {
            $menu.hide();
        }
    });

    $('textarea').hide();
});
