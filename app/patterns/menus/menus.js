// Clone / Patterns / Menus

// Menu Handlers
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

$(document).ready(function () {
    $(document).on("click", "[data-c-menu-mobile-trigger]", function(e) {
        e.preventDefault();
        toggleMenu(this);
    });
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

$(document).ready(function () {
    $(document).on("click", "[data-c-menu-submenu-trigger]", function(e) {
        e.preventDefault();
        toggleSubmenu(this);
    });
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

$(document).ready(function () {
    $(document).on("click", "[data-c-menu] a", function(e) {
        menuItemClick(this);
    });
});