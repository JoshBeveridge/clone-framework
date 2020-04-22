// Clone / Components / Alerts

// Old
function alertTriggerOld(trigger) {
    $(trigger).closest("[data-c-alert='information']").remove();
    $(trigger).closest("[data-c-alert='warning']").remove();
    $(trigger).closest("[data-c-alert='error']").remove();
}

$(document).ready(function () {
    $(document).on("click", "[data-c-alert='close-trigger']", function (e) {
        e.preventDefault();
        alertTriggerOld(this);
    });
});

// New
function alertTrigger(trigger) {
    $(trigger).closest("[data-c-alert]").remove();
}

$(document).ready(function () {
    $(document).on("click", "[data-c-alert-close-trigger]", function (e) {
        e.preventDefault();
        alertTrigger(this);
    });
});