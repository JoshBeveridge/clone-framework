// =============================================================================

    // APP JS
    // Authored by Josh Beveridge and Justin Bellefontaine

// =============================================================================

(function($) {

    $(document).ready(function() {

        var $root = $('html, body');

        // User Agent Data Attributes ==========================================
        var ua = navigator.userAgent;
        ua = ua.toString();
        $('body').attr('id', ua);

        // Main Menu Trigger ===================================================
        // $('.main-menu-toggle').on('click',function(e){
        //     $('body').toggleClass('hide-overflow');
        //     $('.site-header__navigation').toggleClass('active');
        //     $('.site-header__navigation-close').toggleClass('active');
        //     e.preventDefault();
        //     e.stopPropagation();
        // });

        // Submenu expanders ===================================================
        // $('.sub-menu').prev().append('<span class="expand"></span>');
        //
        // $('.expand').on('click',function(e){
        //     $(this).parent().siblings('.sub-menu').toggleClass('active');
        //     $(this).toggleClass('active');
        //     e.preventDefault();
        // });

        // Slick (Home Hero) ===================================================
        if($('body').hasClass('home')) {
            $('.hero').slick({
                prevArrow: '<button type="button" class="slick-prev ion-ios-arrow-back"></button>',
                nextArrow: '<button type="button" class="slick-next ion-ios-arrow-forward"></button>',
                cssEase: 'ease',
                fade: false,
                useTransform: true,
                dots: true,
                appendDots: '.hero__wrapper',
                appendArrows: '.hero__wrapper'
            });
        }

        // Disabled Button Clicks ==============================================
        $('.disabled').on('click', function(e){
            e.preventDefault();
            e.stopPropagation();
            return false;
        });

        // Custom Classes for WP Images ========================================
        if($("[class*='wp-image']").length) {
            $("[class*='wp-image']").parent().addClass('wp-image__wrapper');
        }

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
