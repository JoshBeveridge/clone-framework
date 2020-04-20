// Clone / Core

// Validation Function
$.fn.isValid = function() {
    return this[0].checkValidity();
}

// Define Root
var $root = $('html, body');

// hasAttribute Function
$.fn.hasAttr = function (name) {
    var attr = $(this).attr(name);
    return (typeof attr !== typeof undefined && attr !== false);
};

// User Agent Data Attributes
var ua = navigator.userAgent;
ua = ua.toString();
$('body').attr('id', ua);

// Find Focusable Items
function focusable(focusElement) {
    return (focusElement.find('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));
}