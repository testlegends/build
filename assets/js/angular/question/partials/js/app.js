/**
 * Question.app
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/05/09
 */

require.config({
    baseUrl: '/js/angular',
    paths: {
        jquery: "../vendor/jquery/dist/jquery",
        autosize: "../vendor/jquery-autosize/jquery.autosize.min"
    },
    shim: {
        autosize: ['jquery']
    }
});

require([
    'jquery',
    'autosize',
    'select2'
], function ($) {
    $(document).ready(function(){
        $('textarea').autosize();
        $('select').select2(); //TODO: to be removed after using ui-select2 in sidebar directives

        toastr.options = {
            positionClass: "toast-bottom-right"
        };
    });
});
