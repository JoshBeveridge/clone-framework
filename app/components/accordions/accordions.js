// Clone / Components / Accordions

// Old
function accordionTriggerOld(trigger) {
    var accordion = "[data-c-accordion='trigger']";
    var content = "[data-c-accordion='content']";
    if ($(trigger).parent(accordion).hasClass("active")) {
        $(trigger).attr("aria-expanded", "false");
        $(trigger).parent(accordion).removeClass("active");
        $(trigger).parent(accordion).find(content).attr("aria-hidden", "true");
    }
    else {
        $(trigger).attr("aria-expanded", "true");
        $(trigger).parent(accordion).addClass("active");
        $(trigger).parent(accordion).find(content).attr("aria-hidden", "false");
        var siblingContent = $(trigger).siblings(content);
        var focusableItems = focusable(siblingContent);
        var firstFocusableItem = $(focusableItems).first();
        if (focusableItems.length != 0) {
            firstFocusableItem[0].focus();
        }
    }
}

$(document).ready(function () {
    $(document).on("click", "[data-c-accordion='trigger']", function (e) {
        e.preventDefault();
        accordionTriggerOld(this);
    });
});

// New (Empty Attribute)
function accordionTrigger(trigger) {
    var accordion = "[data-c-accordion='']";
    var content = "[data-c-accordion-content]";
    if ($(trigger).parent(accordion).hasClass("active")) {
        $(trigger).attr("aria-expanded", "false");
        $(trigger).parent(accordion).removeClass("active");
        $(trigger).parent(accordion).find(content).attr("aria-hidden", "true");
    }
    else {
        $(trigger).attr("aria-expanded", "true");
        $(trigger).parent(accordion).addClass("active");
        $(trigger).parent(accordion).find(content).attr("aria-hidden", "false");
        var siblingContent = $(trigger).siblings(content);
        var focusableItems = focusable(siblingContent);
        var firstFocusableItem = $(focusableItems).first();
        if (focusableItems.length != 0) {
            firstFocusableItem[0].focus();
        }
    }
}

$(document).ready(function () {
    $(document).on("click", "[data-c-accordion-trigger]", function (e) {
        e.preventDefault();
        accordionTrigger(this);
    });
});

// New (React Fix)
function accordionTriggerReact(trigger) {
    var accordion = "[data-c-accordion='true']";
    var content = "[data-c-accordion-content]";
    if ($(trigger).parent(accordion).hasClass("active")) {
        $(trigger).attr("aria-expanded", "false");
        $(trigger).parent(accordion).removeClass("active");
        $(trigger).parent(accordion).find(content).attr("aria-hidden", "true");
    }
    else {
        $(trigger).attr("aria-expanded", "true");
        $(trigger).parent(accordion).addClass("active");
        $(trigger).parent(accordion).find(content).attr("aria-hidden", "false");
        var siblingContent = $(trigger).siblings(content);
        var focusableItems = focusable(siblingContent);
        var firstFocusableItem = $(focusableItems).first();
        if (focusableItems.length != 0) {
            firstFocusableItem[0].focus();
        }
    }
}

$(document).ready(function () {
    $(document).on("click", "[data-c-accordion-trigger]", function (e) {
        e.preventDefault();
        accordionTriggerReact(this);
    });
});