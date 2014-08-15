/**
 * index.js
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/08/13
 */

$(document).ready(function(){
    $('.add_new button').click(function(e){
        e.stopPropagation();
        $('.menu-add').show();
    });

    $(document).click(function(){
        var $menu = $('.menu-add');

        if ($menu.is(':visible')) {
            $menu.hide();
        }
    });

    // TODO: need to find a better way to do this
    $('#import-nav').removeClass('active-nav');
    $('#library-nav').addClass('active-nav');
});
