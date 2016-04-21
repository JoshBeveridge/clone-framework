// =============================================================================

    // STYLE GUIDE JS
    // Property of Norex
    // Authored by Josh Beveridge and Justin Bellefontaine

// =============================================================================

(function($) {

    $(document).ready(function() {

        // Color Block Hex Codes ===============================================
        if($('.color-block').length > 0) {
            function rgb2hex(rgb){
             rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
             return (rgb && rgb.length === 4) ? "#" +
              ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
              ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
              ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
            }

            $('.color-block').each(function(e) {
                var colors = $(this).css('backgroundColor');
                var rgbcolor = rgb2hex(colors);
                $('.color-block-hex', this).text(rgbcolor);
                $('.color-block-rgb', this).text(colors);
            });
        }

        //== Body offset for fixed header ======================================
        if($('body').hasClass('style-guide')) {
            $('.app-pane.primary').css("padding-top", $('.style-block-header').outerHeight() - 1);
        }

        // Menu Toggle =========================================================
        if (matchMedia('only screen and (max-width: 70em)').matches) {
            $('.menu-toggle i').removeClass('ion-android-close').addClass('ion-android-menu');
            $('.menu-toggle').on('click',function(e){
                if($(this).hasClass('active')) {
                    $(this).children('i').removeClass('ion-android-menu').addClass('ion-android-close');
                } else {
                    $(this).children('i').removeClass('ion-android-close').addClass('ion-android-menu');
                }
                e.preventDefault();
            });
        }

        if (matchMedia('only screen and (min-width: 70em)').matches) {
            $('.menu-toggle').on('click',function(e){
                if($(this).hasClass('active')) {
                    $(this).children('i').removeClass('ion-android-close').addClass('ion-android-menu');
                } else {
                    $(this).children('i').removeClass('ion-android-menu').addClass('ion-android-close');
                }
                e.preventDefault();
            });
        }

    });

})(jQuery);
