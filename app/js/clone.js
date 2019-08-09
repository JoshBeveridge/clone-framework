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

    // Core ====================================================================
    $(document).ready(function () {

        // Accordion Handlers ==================================================
        
            // Old
            function accordionTriggerOld(trigger) {
                var object = clone("accordion", "accordion");
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
                    var focusableItems = $(trigger).siblings(content).find(":focusable");
                    focusableItems.first().focus();
                }
            }

            $(document).on("click", clone("accordion", "trigger"), function (e) {
                e.preventDefault();
                accordionTriggerOld(this);
            });

            // New
            function accordionTrigger(trigger) {
                var accordion = "[data-c-accordion='']";
                var content = "[data-c-accordion-content";
                if ($(trigger).parent(accordion).hasClass("active")) {
                    $(trigger).attr("aria-expanded", "false");
                    $(trigger).parent(accordion).removeClass("active");
                    $(trigger).parent(accordion).find(content).attr("aria-hidden", "true");
                }
                else {
                    $(trigger).attr("aria-expanded", "true");
                    $(trigger).parent(accordion).addClass("active");
                    $(trigger).parent(accordion).find(content).attr("aria-hidden", "false");
                    var focusableItems = $(trigger).siblings(content).find(":focusable");
                    focusableItems.first().focus();
                }
            }

            $(document).on("click", "[data-c-accordion-trigger]", function (e) {
                e.preventDefault();
                accordionTrigger(this);
            });

        // Alert Handlers ======================================================
        
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

        // Form Handlers =======================================================

            // HTML5 Validation ------------------------------------------------

                // Required Fields ---------------------------------------------
                function requiredFields() {
                    $("input:required, textarea:required, select:required").each(function(e) {
                        $(this).parents(clone("input")).attr("data-c-required", "");
                    });
                }

                requiredFields();

                // Validation --------------------------------------------------
                $(clone("input") + " input," + clone("input") + " textarea," + clone("input") + " select").focusout(function(e) {
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
                });

            // Password Toggle -------------------------------------------------
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

        // Dialog Handlers ===============================================

            // Dialog Tabindex on Pageload ---------------------------------
            function dialogTabIndex() {
                $(clone("dialog")).each(function() {
                    $(this).find(":focusable").attr("tabindex", "-1");
                });
            }

            dialogTabIndex();

            // Dialog Trigger -----------------------------------------------
            function dialogTrigger(trigger) {

                var dialogID = $(trigger).attr("data-c-dialog-id");
                var dialog = $(clone("dialog") + "[data-c-dialog-id='" + dialogID +"']");
                var overlay = $(clone("dialog-overlay"));
                var targetInput = $("[data-c-dialog-focus]");
                $(targetInput).attr("tabindex", "0");
                var focusableItems = $(dialog).find(":focusable");

                if($(dialog).attr("data-c-dialog") != "") {
                    $("body").css("overflow", "visible");
                    $(overlay).attr("data-c-dialog-overlay", "");
                    $(dialog).attr("data-c-dialog", "");
                    $(dialog).attr("aria-hidden", "true");
                    $(focusableItems).each(function() {
                        $(this).attr("tabindex", "-1");
                    });
                    $(clone("dialog-ancestor")).focus();
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
                    $(targetInput).focus();
                    dialogTabbing(firstInput, lastInput);
                    dialogEscape();
                }
            }

            // Dialog Sizing -----------------------------------------------
            function dialogSizing(dialog) {
                var viewportHeight = $(window).height();
                if (dialog != null) {
                    var dialogHeight = $(dialog).find(">div").height();
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
                            var dialogHeight = $(this).find(">div").height();
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

            $(window).resize(function(e) {
                e.preventDefault();
                dialogSizing();
            });

            // Tab Handler -------------------------------------------------
            function dialogTabbing(first, last) {
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
            function dialogEscape() {
                $(document).on("keyup", function(e){
                    if ((e.key==='Escape'||e.key==='Esc'||e.keyCode===27)){
                        $(clone("dialog-overlay")).attr(clone("dialog-overlay"), "");
                        $(clone("dialog")).attr(clone("dialog"), "");
                        $("body").css("overflow", "visible");

                        if (e.stopPropagation) {
                            e.stopPropagation();
                            e.preventDefault();
                        }
                    }
                });
            }

        // Menu Handlers =======================================================
        function toggleMenu(trigger) {
            if ($(trigger).hasClass("active")) {
                $("body").css("overflow", "visible");
                $(trigger).removeClass("active").attr("aria-pressed", "false");
                var focusableItems = $("[data-c-menu]").find(":focusable");
                $("[data-c-menu]").removeClass("active");
                $(focusableItems).each(function() {
                    $(this).attr("tabindex", "-1");
                });
            }
            else {
                $("body").css("overflow", "hidden");
                $(trigger).addClass("active").attr("aria-pressed", "true");
                $("[data-c-menu]").addClass("active");
                var focusableItems = $("[data-c-menu]").find(":focusable");
                var secondLast = focusableItems.last();
                var newItems = $.merge(focusableItems, $(trigger));
                $(newItems).each(function() {
                    $(this).attr("tabindex", "0");
                });
                var firstInput = newItems.first();
                var lastInput = newItems.last();
                $(firstInput).focus();
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
                            $(first).focus();
                        } 
                        else if ($(secondLast).is(":focus")) {
                            // console.log("2ND TO LAST");
                            e.preventDefault();
                            $(last).focus();
                        }
                    }
                    else if (keyCode == 9 && e.shiftKey) {
                        if ($(first).is(":focus")) {
                            // console.log("FIRST TO LAST");
                            e.preventDefault();
                            $(last).focus();
                        }
                        else if ($(last).is(":focus")) {
                            // console.log("LAST TO 2ND");
                            e.preventDefault();
                            $(secondLast).focus();
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
                var focusableItems = $("[data-c-menu]").find(":focusable");
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
})(jQuery);