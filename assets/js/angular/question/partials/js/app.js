/**
 * Question.app
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/05/09
 */

require.config({
    paths: {
        jquery: "//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min",
        autosize: "../vendor/jquery-autosize/jquery.autosize.min",
        select2: "../vendor/select2/select2.min"
    },
    shim: {
        autosize: ['jquery'],
        select2: ['jquery']
    }
});

require([
    'jquery',
    'autosize',
    'select2'
], function ($) {
    $(document).ready(function(){
        $('textarea').autosize();
        $('select').select2();

        toastr.options = {
            positionClass: "toast-bottom-right"
        };
    });
});
