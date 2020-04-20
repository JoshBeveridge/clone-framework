// Clone / Components / Form Elements

// Required Fields
function requiredFields() {
    $("input:required, textarea:required, select:required").each(function(e) {
        $(this).parents("[data-c-input]").attr("data-c-required", "");
    });
}

$(document).ready(function () {
    requiredFields();
});

// Validation
var inputs = $("[data-c-input]" + " input," + "[data-c-input]" + " textarea," + "[data-c-input]" + " select");
function handlerFunction() {
    if ($(this).is("[required]")) {
        if ($(this).val() == "") {
            if ($(this).attr("type") == "password") {
                return false;
            }
            else {
                $(this).parents("[data-c-input]").attr("data-c-invalid", "");
            }
        }
        else {
            if ($(this).isValid() == true) {
                if ($(this).val() == "" || $(this).attr("type") == "password") {
                    $(this).parents("[data-c-input]").removeAttr("data-c-invalid");
                }
                else {
                    $(this).parents("[data-c-input]").removeAttr("data-c-invalid");
                }
            }
            else {
                if ($(this).attr("type") == "password") {
                    return false;
                }
                else {
                    $(this).parents("[data-c-input]").attr("data-c-invalid", "");
                }
            }
        }
    }
    else {
        if ($(this).isValid() == true) {
            if ($(this).val() == "" || $(this).attr("type") == "password") {
                $(this).parents("[data-c-input]").removeAttr("data-c-invalid");
            }
            else {
                $(this).parents("[data-c-input]").removeAttr("data-c-invalid");
            }
        }
        else {
            if ($(this).attr("type") == "password") {
                return false;
            }
            else {
                $(this).parents("[data-c-input]").attr("data-c-invalid", "");
            }
        }
    }
};

$(document).ready(function () {
    var newInputs = $(inputs);
    for (var i = 0, len = inputs.length; i < len; i++) {
        newInputs[i].addEventListener('focusout', handlerFunction, false);
    }
});