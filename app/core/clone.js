// Clone / Core / JavaScript

// Find Focusable Items
function cloneFocusable(focusElement) {
    console.log("focusElement", focusElement);
    console.log("focusElementCode", focusElement.find('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));
    return (focusElement.find('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));
}

export function focusable(focusElement) {
    // console.log(focusElement);
    return cloneFocusable(focusElement);
};