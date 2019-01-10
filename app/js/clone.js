
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

    });

})(jQuery);
