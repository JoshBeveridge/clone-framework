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

    // Clone Shorthand =========================================================

        function clone(attr, option, selector) {
            if (option != null) {
                if (selector != null) {
                    return '[data-clone-' + attr + selector + '=\'' + option + '\']';
                }
                else {
                    return '[data-clone-' + attr + '=\'' + option + '\']';
                }
            }
            else {
                return '[data-clone-' + attr + ']';
            }
        }

    // Core ====================================================================

        $(document).ready(function () {

            // Accordion Handlers ==============================================

                function accordionTrigger(trigger) {
                    var object = clone("accordion", "object");
                    var content = clone("accordion", "content");
                    if ($(trigger).parent(object).hasClass("active")) {
                        $(trigger).attr("aria-expanded", "false");
                        $(trigger).parent(object).removeClass("active");
                        $(trigger).parent(object).find(content).attr("aria-hidden", "true");
                    }
                    else {
                        $(trigger).attr("aria-expanded", "true");
                        $(trigger).parent(object).addClass("active");
                        $(trigger).parent(object).find(content).attr("aria-hidden", "false");
                    }
                }

                $(document).on("click", clone("accordion", "trigger"), function (e) {
                    e.preventDefault();
                    accordionTrigger(this);
                });

            // Carousel Controls ===============================================

                $(clone("carousel")).slick({
                    nextArrow: '<button class="slick-next" title="View the next slide." type="button"><i class="material-icons">arrow_forward_ios</i></button>',
                    prevArrow: '<button class="slick-prev" title="View the previous slide." type="button"><i class="material-icons">arrow_back_ios</i></button>',
                    lazyLoad: "progressive"
                });

            // Form Handlers ===================================================

                // HTML5 Validation --------------------------------------------

                    // Required Fields -----------------------------------------
                    function requiredFields() {
                        $("input:required, textarea:required, select:required").each(function(e) {
                            $(this).parents(clone("input")).attr("data-clone-required", "");
                        });
                    }

                    requiredFields();

                    // Validation ----------------------------------------------
                    $(clone("input") + " input," + clone("input") + " textarea," + clone("input") + " select").focusout(function(e) {
                        if ($(this).is("[required]")) {
                            if ($(this).val() == "") {
                                if ($(this).attr("type") == "password") {
                                    return false;
                                }
                                else {
                                    $(this).parents(clone("input")).attr("data-clone-invalid", "");
                                }
                            }
                            else {
                                if ($(this).isValid() == true) {
                                    if ($(this).val() == "" || $(this).attr("type") == "password") {
                                        $(this).parents(clone("input")).removeAttr("data-clone-invalid");
                                    }
                                    else {
                                        $(this).parents(clone("input")).removeAttr("data-clone-invalid");
                                    }
                                }
                                else {
                                    if ($(this).attr("type") == "password") {
                                        return false;
                                    }
                                    else {
                                        $(this).parents(clone("input")).attr("data-clone-invalid", "");
                                    }
                                }
                            }
                        }
                        else {
                            if ($(this).isValid() == true) {
                                if ($(this).val() == "" || $(this).attr("type") == "password") {
                                    $(this).parents(clone("input")).removeAttr("data-clone-invalid");
                                }
                                else {
                                    $(this).parents(clone("input")).removeAttr("data-clone-invalid");
                                }
                            }
                            else {
                                if ($(this).attr("type") == "password") {
                                    return false;
                                }
                                else {
                                    $(this).parents(clone("input")).attr("data-clone-invalid", "");
                                }
                            }
                        }
                    });

                // Password Toggle ---------------------------------------------
                $(clone("input", "password", "*") + " button").on("click", function (e) {
                    e.preventDefault();
                    var x = $(this).siblings("input");
                    if (x.attr("type") === "password") {
                        x.attr("type", "text");
                        x.parents(clone("input", "password", "*")).attr("data-clone-input", "password--visible");
                    }
                    else {
                        x.attr("type", "password");
                        x.parents(clone("input", "password", "*")).attr("data-clone-input", "password");
                    }
                });

            // Dialogue Handlers ===============================================
            function dialogueTrigger(trigger) {

                var dialogueID = $(trigger).attr("data-dialogue-id");
                var dialogue = $(".clone__dialogue-scroll-wrapper[data-dialogue-id='" + dialogueID +"']");

                if($(dialogue).hasClass("active")) {
                    $("body").css("overflow", "visible");
                    $(".clone__dialogue-overlay").removeClass("active");
                    $(dialogue).removeClass("active contained overflowing");
                    $(dialogue).attr("aria-hidden", "true");
                    $(".clone__dialogue-ancestor").focus();
                }
                else {

                    $("*").removeClass("clone__dialogue-ancestor");
                    $(trigger).addClass("clone__dialogue-ancestor");
                    $("body").css("overflow", "hidden");
                    $(".clone__dialogue-overlay").addClass("active");
                    $(dialogue).addClass("active");
                    $(dialogue).attr("aria-hidden", "false");

                    dialogueSizing(dialogue);

                    var focusableItems = $(dialogue).find(":focusable");
                    var firstInput = focusableItems.first();
                    var lastInput = focusableItems.last();

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

                    var dialogueHeight = $(dialogue).find(".clone__dialogue").height();

                    if (dialogueHeight > viewportHeight) {
                        $(dialogue).removeClass("overflowing container").addClass("overflowing");
                    }
                    else {
                        $(dialogue).removeClass("overflowing container").addClass("contained");
                    }

                }
                else {
                    $(".clone__dialogue-scroll-wrapper").each(function() {

                        var dialogueHeight = $(this).find(".clone__dialogue").height();
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

                // Escape Handler ----------------------------------------------
                function dialogueEscape() {

                    $(document).on("keyup", function(e){

                        if ((e.key==='Escape'||e.key==='Esc'||e.keyCode===27)){

                            $(".clone__dialogue-overlay").removeClass("active");
                            $(".clone__dialogue-scroll-wrapper").removeClass("active contained overflowing");
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
