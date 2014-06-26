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
    $(document).ready(function(){

        toastr.options = {
            positionClass: "toast-bottom-right"
        };
    });
});
