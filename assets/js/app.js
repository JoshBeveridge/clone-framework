// =============================================================================

    // APP JS
    // Property of Norex
    // Authored by Josh Beveridge and Justin Bellefontaine

// =============================================================================

(function($) {

    $(document).ready(function() {

        var $root = $('html, body');

        // User Agent Data Attributes ==========================================
        var ua = navigator.userAgent;
        ua = ua.toString();
        $('body').attr('id', ua);

        // Disabled Button Clicks ==============================================
        $('.disabled').on('click', function(e){
            e.preventDefault();
            e.stopPropagation();
            return false;
        });

        // Smooth Scrolling ====================================================
        $('a[href*="#"]:not([href="#"])').on('click',function() {

            $root.animate({
                scrollTop: $( $(this).attr('href') ).offset().top
            }, 500); // change the duration of your animation in ms

            return false;

         });

        // Data Link Handler ===================================================
        $('[data-link-handler]').on('click',function(e){
            if($('[data-link-target="'+$(this).attr('data-link-handler')+'"]').hasClass('active')) {
                $('[data-link-target="'+$(this).attr('data-link-handler')+'"]').removeClass('active');
            }
            else {
                $('[data-link-target="'+$(this).attr('data-link-handler')+'"]').addClass('active');
            }
            e.preventDefault();
        });

    });

})(jQuery);
