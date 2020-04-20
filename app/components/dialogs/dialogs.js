// Clone / Components / Dialogs

// Dialog Tabindex on Pageload
function dialogTabIndex() {
    $("[data-c-dialog]").each(function() {
        // $(this).find(":focusable").attr("tabindex", "-1");
    });
}

$(document).ready(function () {
    dialogTabIndex();
});

// Dialog Trigger
function dialogTrigger(trigger) {
    var dialogID = $(trigger).attr("data-c-dialog-id");
    var dialog = $("[data-c-dialog]" + "[data-c-dialog-id='" + dialogID +"']");
    var overlay = $("[data-c-dialog-overlay]");
    var targetInput = $("[data-c-dialog-focus]");
    $(targetInput).attr("tabindex", "0");
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

// Dialog Sizing
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
        $("[data-c-dialog]").each(function() {
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

$(document).ready(function () {
    $(document).on("click", "button[data-c-dialog-id]", function(e) {
        e.preventDefault();
        dialogTrigger(this);
    });
    window.onresize = (function(e) {
        e.preventDefault();
        dialogSizing();
    });
});

// Tab Handler
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

// Escape Handler
function dialogEscape(trigger) {
    var dialogID = $(trigger).attr("data-c-dialog-id");
    var dialog = $("[data-c-dialog]" + "[data-c-dialog-id='" + dialogID +"']");
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
};

$(document).ready(function () {
    $(document).on("click", "button[data-c-dialog-id]", function(e) {
        e.preventDefault();
        dialogEscape(this);
    });
});