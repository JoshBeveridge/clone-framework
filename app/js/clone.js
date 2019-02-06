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
            return (typeof attr !== typeof undefined && attr !== false);
        };

    // User Agent Data Attributes ==============================================

        var ua = navigator.userAgent;
        ua = ua.toString();
        $('body').attr('id', ua);

    // Core ====================================================================

        $(document).ready(function () {

            // Accordion Handlers ==============================================

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
                    e.preventDefault();
                    accordionTrigger(this);
                });

            // Carousel Controls ===============================================

                $("[class*='carousel--']").slick({
                    nextArrow: '<button class="slick-next" title="View the next slide." type="button"><i class="material-icons">arrow_forward_ios</i></button>',
                    prevArrow: '<button class="slick-prev" title="View the previous slide." type="button"><i class="material-icons">arrow_back_ios</i></button>',
                    lazyLoad: "progressive"
                });

            // Form Handlers ===================================================

                // HTML5 Validation --------------------------------------------

                // Password Toggle ---------------------------------------------

                    $(".password button").on("click", function (e) {

                        e.preventDefault();

                        var x = $(this).siblings("input");

                        if (x.attr("type") === "password") {
                            x.attr("type", "text");
                            x.parents(".password").addClass("visible");
                        }
                        else {
                            x.attr("type", "password");
                            x.parents(".password").removeClass("visible");
                        }

                    });

            // Dialogue Handlers ===============================================

                function dialogueTrigger(trigger) {

                    var dialogueID = $(trigger).attr("data-dialogue-id");
                    var dialogue = $(".dialogue-scroll-wrapper[data-dialogue-id='" + dialogueID +"']");

                    if($(dialogue).hasClass("active")) {
                        $("body").css("overflow", "visible");
                        $(".dialogue-overlay").removeClass("active");
                        $(dialogue).removeClass("active contained overflowing");
                        $(dialogue).attr("aria-hidden", "true");
                        $(".dialogue-ancestor").focus();
                    }
                    else {

                        $("*").removeClass("dialogue-ancestor");
                        $(trigger).addClass("dialogue-ancestor");
                        console.log($(".dialogue-ancestor"));
                        $("body").css("overflow", "hidden");
                        $(".dialogue-overlay").addClass("active");
                        $(dialogue).addClass("active");
                        $(dialogue).attr("aria-hidden", "false");

                        dialogueSizing(dialogue);

                        var focusableItems = $(dialogue).find(":focusable");
                        var firstInput = focusableItems.first();
                        console.log(firstInput);
                        var lastInput = focusableItems.last();
                        console.log(lastInput);

                        if (dialogue.find("form").length == 0) {
                            lastInput.focus();
                        }
                        else {
                            firstInput.focus();
                        }

                        dialogueTabbing(firstInput, lastInput);
                        dialogueEscape();

                    }

                }

                function dialogueSizing(dialogue) {

                    var viewportHeight = $(window).height();

                    if (dialogue != null) {

                        var dialogueHeight = $(dialogue).find(".dialogue").height();

                        if (dialogueHeight > viewportHeight) {
                            $(dialogue).removeClass("overflowing container").addClass("overflowing");
                        }
                        else {
                            $(dialogue).removeClass("overflowing container").addClass("contained");
                        }

                    }
                    else {
                        $(".dialogue-scroll-wrapper").each(function() {

                            var dialogueHeight = $(this).find(".dialogue").height();
                            console.log(dialogueHeight);

                            if (dialogueHeight > viewportHeight) {
                                $(this).removeClass("overflowing container").addClass("overflowing");
                            }
                            else {
                                $(this).removeClass("overflowing container").addClass("contained");
                            }

                        });
                    }

                }

                $(document).on("click", "button[data-dialogue-id]", function(e) {
                    e.preventDefault();
                    dialogueTrigger(this);
                });

                $( window ).resize(function(e) {
                    e.preventDefault();
                    dialogueSizing();
                });

                // Tab Handler -------------------------------------------------

                    function dialogueTabbing(first, last) {

                        $(document).on("keydown", function(e){

                            var keyCode = e.keyCode || e.which;

                            if (keyCode == 9 && !e.shiftKey) {
                                if ($(last).is(":focus")) {
                                    e.preventDefault();
                                    $(first).focus();
                                }
                            }
                            else if (keyCode == 9 && e.shiftKey) {
                                if ($(first).is(":focus")) {
                                    e.preventDefault();
                                    $(last).focus();
                                }
                            }

                        });

                    }

                    // Escape Handler ------------------------------------------

                        function dialogueEscape() {

                            $(document).on("keyup", function(e){

                                if ((e.key==='Escape'||e.key==='Esc'||e.keyCode===27)){

                                    $(".dialogue-overlay").removeClass("active");
                                    $(".dialogue-scroll-wrapper").removeClass("active contained overflowing");
                                    $("body").css("overflow", "visible");

                                    if (e.stopPropagation) {
                                        e.stopPropagation();
                                        e.preventDefault();
                                    }

                                }

                            });

                        }

        });

})(jQuery);
