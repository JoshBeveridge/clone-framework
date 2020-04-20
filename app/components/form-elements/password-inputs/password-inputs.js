// Clone / Components / Form Elements / Password Inputs

$(document).ready(function () {
    $(("[data-c-input*='password']") + " button").on("click", function (e) {
        e.preventDefault();
        var x = $(this).siblings("input");
        if (x.attr("type") === "password") {
            x.attr("type", "text");
            x.parents("[data-c-input*='password']").attr("data-c-input", "password--visible");
        }
        else {
            x.attr("type", "password");
            x.parents("[data-c-input*='password']").attr("data-c-input", "password");
        }
    });
});