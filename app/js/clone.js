// =============================================================================

    // Utilities JavaScript

// =============================================================================

// Add isValid()
$.fn.isValid = function() {
    // console.log($(this[0]).nodeName);
    return this[0].checkValidity();
}

// Root
var $root = $('html, body');

// Add has attribute Function
$.fn.hasAttr = function (name) {
    var attr = $(this).attr(name);
    return (typeof attr !== typeof undefined && attr !== false);
};

// Find Focusable Items
function focusable(el) {
    return (el.find('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));
}

// User Agent Data Attributes ==================================================
var ua = navigator.userAgent;
ua = ua.toString();
$('body').attr('id', ua);

// Clone Shorthand =============================================================
function clone(attr, option, selector) {
    if (option != null) {
        if (selector != null) {
            return '[data-c-' + attr + selector + '=\'' + option + '\']';
        }
        else {
            return '[data-c-' + attr + '=\'' + option + '\']';
        }
    }
    else {
        return '[data-c-' + attr + ']';
    }
}

// Core ========================================================================
$(document).ready(function () {

    // Glider Initialization ===================================================
    window.addEventListener('load', function(){
        var carouselID = 0;
        $("[data-c-carousel]").each(function() {
            if (this.hasAttribute("data-c-custom-carousel")) {
                // Do nothing.
            }
            else {
                carouselID = carouselID + 1;
                $(this).attr("id", "carousel" + carouselID);
                $(this).parent().find("[data-c-carousel-arrow=\"prev\"]").attr("id", "carousel" + carouselID + "prev");
                $(this).parent().find("[data-c-carousel-arrow=\"next\"]").attr("id", "carousel" + carouselID + "next");
                $(this).parent().find("[data-c-carousel-dots]").attr("id", "carousel" + carouselID + "dots");
                new Glider(document.querySelector('#carousel' + carouselID), {
                    slidesToShow: 1,
                    arrows: {
                        "prev": '#carousel' + carouselID + "prev",
                        "next": '#carousel' + carouselID + "next"
                    },
                    dots: '#carousel' + carouselID + "dots",
                    draggable: true,
                    scrollLock: true,
                    rewind: true
                })
            }
        });
    });

    // Alert Handlers ==========================================================
    
    // Old
    function alertTriggerOld(trigger) {
        $(trigger).closest("[data-c-alert='information']").remove();
        $(trigger).closest("[data-c-alert='warning']").remove();
        $(trigger).closest("[data-c-alert='error']").remove();
    }

    $(document).on("click", clone("alert", "close-trigger"), function (e) {
        e.preventDefault();
        alertTriggerOld(this);
    });

    // New
    function alertTrigger(trigger) {
        $(trigger).closest("[data-c-alert]").remove();
    }
    $(document).on("click", "[data-c-alert-close-trigger]", function (e) {
        e.preventDefault();
        alertTrigger(this);
    });

    // Form Handlers ===========================================================

        // HTML5 Validation ----------------------------------------------------

            // Required Fields -------------------------------------------------
            function requiredFields() {
                $("input:required, textarea:required, select:required").each(function(e) {
                    $(this).parents(clone("input")).attr("data-c-required", "");
                });
            }

            requiredFields();

            // Validation ------------------------------------------------------
            var inputs = $(clone("input") + " input," + clone("input") + " textarea," + clone("input") + " select");
            function handlerFunction() {
                if ($(this).is("[required]")) {
                    if ($(this).val() == "") {
                        if ($(this).attr("type") == "password") {
                            return false;
                        }
                        else {
                            $(this).parents(clone("input")).attr("data-c-invalid", "");
                        }
                    }
                    else {
                        if ($(this).isValid() == true) {
                            if ($(this).val() == "" || $(this).attr("type") == "password") {
                                $(this).parents(clone("input")).removeAttr("data-c-invalid");
                            }
                            else {
                                $(this).parents(clone("input")).removeAttr("data-c-invalid");
                            }
                        }
                        else {
                            if ($(this).attr("type") == "password") {
                                return false;
                            }
                            else {
                                $(this).parents(clone("input")).attr("data-c-invalid", "");
                            }
                        }
                    }
                }
                else {
                    if ($(this).isValid() == true) {
                        if ($(this).val() == "" || $(this).attr("type") == "password") {
                            $(this).parents(clone("input")).removeAttr("data-c-invalid");
                        }
                        else {
                            $(this).parents(clone("input")).removeAttr("data-c-invalid");
                        }
                    }
                    else {
                        if ($(this).attr("type") == "password") {
                            return false;
                        }
                        else {
                            $(this).parents(clone("input")).attr("data-c-invalid", "");
                        }
                    }
                }
            };

            var newInputs = $(inputs);
            for (var i = 0, len = inputs.length; i < len; i++) {
                newInputs[i].addEventListener('focusout', handlerFunction, false);
            }

        // Password Toggle -----------------------------------------------------
        $(clone("input", "password", "*") + " button").on("click", function (e) {
            e.preventDefault();
            var x = $(this).siblings("input");
            if (x.attr("type") === "password") {
                x.attr("type", "text");
                x.parents(clone("input", "password", "*")).attr("data-c-input", "password--visible");
            }
            else {
                x.attr("type", "password");
                x.parents(clone("input", "password", "*")).attr("data-c-input", "password");
            }
        });

    // Dialog Handlers =========================================================

        // Dialog Tabindex on Pageload -----------------------------------------
        function dialogTabIndex() {
            $(clone("dialog")).each(function() {
                // $(this).find(":focusable").attr("tabindex", "-1");
            });
        }

        dialogTabIndex();

        // Dialog Trigger ------------------------------------------------------
        function dialogTrigger(trigger) {
            var dialogID = $(trigger).attr("data-c-dialog-id");
            var dialog = $(clone("dialog") + "[data-c-dialog-id='" + dialogID +"']");
            var overlay = $(clone("dialog-overlay"));
            var targetInput = $("[data-c-dialog-focus]");
            $(targetInput).attr("tabindex", "0");
            // var focusableItems = $(dialog).find(":focusable");
            var focusableItems = focusable($(dialog));
            if($(dialog).attr("data-c-dialog") != "") {
                $("body").css("overflow", "visible");
                $(overlay).attr("data-c-dialog-overlay", "");
                $(dialog).attr("data-c-dialog", "");
                $(dialog).attr("aria-hidden", "true");
                $(focusableItems).each(function() {
                    $(this).attr("tabindex", "-1");
                });
                $(dialog).off('keyup');
                document.querySelector("[data-c-dialog-ancestor]").focus();
            }
            else {
                $("*").removeAttr("data-c-dialog-ancestor");
                $(trigger).attr("data-c-dialog-ancestor", "");
                $("body").css("overflow", "hidden");
                $(focusableItems).each(function() {
                    $(this).attr("tabindex", "0");
                });
                $(overlay).attr("data-c-dialog-overlay", "active");
                $(dialog).attr("aria-hidden", "false");
                dialogSizing(dialog);
                var firstInput = focusableItems.first();
                var lastInput = focusableItems.last();
                if (targetInput[0] != null) {
                    targetInput[0].focus();
                }
                dialogTabbing(firstInput, lastInput);
            }
        }

        // Dialog Sizing -------------------------------------------------------
        function dialogSizing(dialog) {
            var viewportHeight = $(window).height();
            if (dialog != null) {
                var dialogHeight = $(dialog).children("div").height() + 50;
                if (dialogHeight > viewportHeight) {
                    $(dialog).attr("data-c-dialog", "active--overflowing");
                }
                else {
                    $(dialog).attr("data-c-dialog", "active--contained");
                }
            }
            else {
                $(clone("dialog")).each(function() {
                    if ($(this).attr("data-c-dialog") == false){
                        return false;
                    }
                    else {
                        var dialogHeight = $(this).children("div").height() + 50;
                        if (dialogHeight > viewportHeight) {
                            $(this).attr("data-c-dialog", "active--overflowing");
                        }
                        else {
                            $(this).attr("data-c-dialog", "active--contained");
                        }
                    }
                });
            }
        }

        $(document).on("click", "button[data-c-dialog-id]", function(e) {
            e.preventDefault();
            dialogTrigger(this);
        });

        window.onresize = (function(e) {
            e.preventDefault();
            dialogSizing();
        });

        // Tab Handler ---------------------------------------------------------
        function dialogTabbing(first, last) {
            $(document).on("keydown", function(e){
                var keyCode = e.keyCode || e.which;
                if (keyCode == 9 && !e.shiftKey) {
                    if ($(last).is(":focus")) {
                        e.preventDefault();
                        first[0].focus();
                    }
                }
                else if (keyCode == 9 && e.shiftKey) {
                    if ($(first).is(":focus")) {
                        e.preventDefault();
                        last[0].focus();
                    }
                }
            });
        }

        // Escape Handler ------------------------------------------------------
        function dialogEscape(trigger) {
            var dialogID = $(trigger).attr("data-c-dialog-id");
            var dialog = $(clone("dialog") + "[data-c-dialog-id='" + dialogID +"']");
            if ($(dialog).hasAttr("data-c-dialog-escapable")) {
                $(dialog).on("keyup", function(e){
                    var keyCode = e.keyCode || e.which;
                    if (keyCode == 27) {
                        $("[data-c-dialog-overlay]").attr("data-c-dialog-overlay", "");
                        $("[data-c-dialog]").each(function() {
                            $(this).attr("data-c-dialog", "");
                        });
                        $("body").css("overflow", "visible");
                        document.querySelector("[data-c-dialog-ancestor]").focus();
                        $(dialog).off('keyup');
                    }
                });
            }
        }

        $(document).on("click", "button[data-c-dialog-id]", function(e) {
            e.preventDefault();
            dialogEscape(this);
        });

    // Menu Handlers ===========================================================
    function toggleMenu(trigger) {
        if ($(trigger).hasClass("active")) {
            $("body").removeClass("mobile-lock");
            $(trigger).removeClass("active").attr("aria-pressed", "false");
            // var focusableItems = $("[data-c-menu]").find(":focusable");
            var focusableItems = focusable($("[data-c-menu]"));
            $("[data-c-menu]").removeClass("active");
            $(focusableItems).each(function() {
                $(this).attr("tabindex", "-1");
            });
        }
        else {
            $("body").addClass("mobile-lock");
            $(trigger).addClass("active").attr("aria-pressed", "true");
            $("[data-c-menu]").addClass("active");
            // var focusableItems = $("[data-c-menu]").find(":focusable");
            var focusableItems = focusable($("[data-c-menu]"));
            var secondLast = focusableItems.last();
            var newItems = $(focusableItems).add($(trigger));
            $(newItems).each(function() {
                $(this).attr("tabindex", "0");
            });
            var firstInput = newItems.first();
            var lastInput = newItems.last();
            // $(firstInput).focus();
            menuTabbing(firstInput, secondLast, lastInput);
        }
    }

    $(document).on("click", "[data-c-menu-mobile-trigger]", function(e) {
        e.preventDefault();
        toggleMenu(this);
    });

    function menuTabbing(first, secondLast, last) {
        $(document).on("keydown", function(e){
            if ($("[data-c-menu]").hasClass("active")) {
                var keyCode = e.keyCode || e.which;
                if (keyCode == 9 && !e.shiftKey) {
                    if ($(last).is(":focus")) {
                        // console.log("LAST TO FIRST");
                        e.preventDefault();
                        first[0].focus();
                    } 
                    else if ($(secondLast).is(":focus")) {
                        // console.log("2ND TO LAST");
                        e.preventDefault();
                        last[0].focus();
                    }
                }
                else if (keyCode == 9 && e.shiftKey) {
                    if ($(first).is(":focus")) {
                        // console.log("FIRST TO LAST");
                        e.preventDefault();
                        last[0].focus();
                    }
                    else if ($(last).is(":focus")) {
                        // console.log("LAST TO 2ND");
                        e.preventDefault();
                        secondLast[0].focus();
                    }
                }
            }
        });
    }
    
    function toggleSubmenu(trigger) {
        var parent = $(trigger).closest("li");
        if ($(parent).hasClass("active")) {
            $(parent).removeClass("active");
            $(parent).find("ul").removeClass("active");
            $(parent).find("li").removeClass("active");
        }
        else {
            $(parent).addClass("active");
            $(parent).children("ul").addClass("active");
        }
    }

    $(document).on("click", "[data-c-menu-submenu-trigger]", function(e) {
        e.preventDefault();
        toggleSubmenu(this);
    });

    function menuItemClick(trigger) {
        var destination = $(trigger).attr("href");
        if (destination.match("^#")) {
            $("body").css("overflow", "visible");
            $("[data-c-menu-mobile-trigger]").removeClass("active").attr("aria-pressed", "false");
            // var focusableItems = $("[data-c-menu]").find(":focusable");
            var focusableItems = focusable($("[data-c-menu]"));
            $("[data-c-menu]").removeClass("active");
            $(focusableItems).each(function() {
                $(this).attr("tabindex", "-1");
            });
        }
        else {

        }
    }

    $(document).on("click", "[data-c-menu] a", function(e) {
        menuItemClick(this);
    });

});

// Accordions
import {accordionTriggerOld, accordionTrigger, accordionTriggerReact} from './components/accordions/accordions.js';

    // Old Syntax
    $(document).ready(function () {
        $(document).on("click", "[data-c-accordion='trigger']", function (e) {
            e.preventDefault();
            accordionTriggerOld(this);
        });
    });

    // New/React Syntax
    $(document).ready(function () {
        $(document).on("click", "[data-c-accordion-trigger]", function (e) {
            e.preventDefault();
            accordionTrigger(this);
        });
    });
    $(document).ready(function () {
        $(document).on("click", "[data-c-accordion-trigger]", function (e) {
            e.preventDefault();
            accordionTriggerReact(this);
        });
    });