
// =============================================================================

// Utilities JavaScript (jQuery)

// =============================================================================

(function ($) {

    // Add isValid()

    $.fn.isValid = function () {
        return this[0].checkValidity()
    }

    // Root

    var $root = $('html, body');

    // Add has attribute Function

    $.fn.hasAttr = function (name) {
        var attr = $(this).attr(name);
        // For some browsers, `attr` is undefined; for others,
        // `attr` is false.  Check for both.
        return (typeof attr !== typeof undefined && attr !== false);
    };

    // User Agent Data Attributes ==============================================

    var ua = navigator.userAgent;
    ua = ua.toString();
    // console.log("hello");
    $('body').attr('id', ua);

    $(document).ready(function () {

        // Accordion Handlers ==================================================

            function accordionTrigger(trigger) {
                if ($(trigger).parent(".accordion").hasClass("active")) {
                    $(trigger).attr("aria-expanded", "false");
                    $(trigger).parent(".accordion").removeClass("active");
                    $(trigger).parent(".accordion").find(".accordion-content").attr("aria-hidden", "true");
                }
                else {
                    $(trigger).attr("aria-expanded", "true");
                    $(trigger).parent(".accordion").addClass("active");
                    $(trigger).parent(".accordion").find(".accordion-content").attr("aria-hidden", "false");
                }
            }

            $(document).on("click", ".accordion-trigger", function (e) {

                accordionTrigger(this);

            });

            $(document).on("keyup", ".accordion-trigger", function (e) {

                if (e.which == 13) {
                    accordionTrigger(this);
                }

            });

        // Carousel Controls ===================================================

            // function carouselNext(trigger) {

            //     var slides = $(trigger).siblings(".carousel-frame").find(".carousel-item");
            //     var previous = $(trigger).siblings(".carousel-frame").find(".previous");
            //     var current = $(trigger).siblings(".carousel-frame").find(".current");
            //     var next = $(trigger).siblings(".carousel-frame").find(".next");

            //     if (previous.next().length == 0) {

            //         firstNode = slides.eq(0).clone().removeClass("previous current next");

            //         $(trigger).siblings(".carousel-frame").append(firstNode);

            //         previous.removeClass("previous").next().addClass("previous");

            //     }
            //     else {
            //         previous.removeClass("previous").next().addClass("previous");
            //     }

            //     current.removeClass("current").next().addClass("current");

            //     next.removeClass("next").next().addClass("next");

            //     slides.eq(0).remove();

            // }

            // $(document).on("click", ".carousel-control.next", function (e) {

            //     carouselNext(this);

            // });

            // $(document).on("keyup", ".carousel-control.next", function (e) {

            //     if (e.which == 13) {
            //         carouselNext(this);
            //     }

            // });

            // function carouselPrev(trigger) {

            //     if ($(trigger).siblings(".carousel-frame").find(".current").length == 0) {
            //         var slides = $(trigger).siblings(".carousel-frame").find(".carousel-item");
            //         slides.eq(-2).addClass("previous");
            //         slides.eq(-1).addClass("current");
            //         slides.eq(0).addClass("next");
            //     }
            //     else {

            //         var slides = $(trigger).siblings(".carousel-frame").find(".carousel-item");
            //         var previous = $(trigger).siblings(".carousel-frame").find(".previous");
            //         var current = $(trigger).siblings(".carousel-frame").find(".current");
            //         var next = $(trigger).siblings(".carousel-frame").find(".next");

            //         if (previous.prev().length == 0) {
            //             previous.removeClass("previous");
            //             slides.eq(-1).addClass("previous");
            //         }
            //         else {
            //             previous.removeClass("previous").prev().addClass("previous");
            //         }
            //         if (current.prev().length == 0) {
            //             current.removeClass("current");
            //             slides.eq(-1).addClass("current");
            //         }
            //         else {
            //             current.removeClass("current").prev().addClass("current");
            //         }
            //         if (next.prev().length == 0) {
            //             next.removeClass("next");
            //             slides.eq(-1).addClass("next");
            //         }
            //         else {
            //             next.removeClass("next").prev().addClass("next");
            //         }

            //     }

            // }

            // $(document).on("click", ".carousel-control.prev", function (e) {

            //     carouselPrev(this);

            // });

            // $(document).on("keyup", ".carousel-control.prev", function (e) {

            //     if (e.which == 13) {
            //         carouselPrev(this);
            //     }

            // });

    });

})(jQuery);
