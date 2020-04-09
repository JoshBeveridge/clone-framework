// Clone / Components / Accordions / JavaScript

import {focusable} from '../../core/clone.js';

// Old
function cloneAccordionTriggerOld(trigger) {
    let object = "[data-c-accordion='trigger']";
    let content = "[data-c-accordion='content']";
    if ($(trigger).parent(object).hasClass("active")) {
        $(trigger).attr("aria-expanded", "false");
        $(trigger).parent(object).removeClass("active");
        $(trigger).parent(object).find(content).attr("aria-hidden", "true");
    }
    else {
        $(trigger).attr("aria-expanded", "true");
        $(trigger).parent(object).addClass("active");
        $(trigger).parent(object).find(content).attr("aria-hidden", "false");
        let siblingContent = $(trigger).siblings(content);
        let focusableItems = focusable(siblingContent);
        let firstFocusableItem = $(focusableItems).first();
        if (focusableItems.length != 0) {
            firstFocusableItem[0].focus();
        }
    }
}

export function accordionTriggerOld(trigger) {
    cloneAccordionTriggerOld(trigger);
};

// New (Empty Attribute)
function cloneAccordionTrigger(trigger) {
    let accordion = "[data-c-accordion='']";
    let content = "[data-c-accordion-content]";
    if ($(trigger).parent(accordion).hasClass("active")) {
        $(trigger).attr("aria-expanded", "false");
        $(trigger).parent(accordion).removeClass("active");
        $(trigger).parent(accordion).find(content).attr("aria-hidden", "true");
    }
    else {
        $(trigger).attr("aria-expanded", "true");
        $(trigger).parent(accordion).addClass("active");
        $(trigger).parent(accordion).find(content).attr("aria-hidden", "false");
        let siblingContent = $(trigger).siblings(content);
        let focusableItems = focusable(siblingContent);
        let firstFocusableItem = $(focusableItems).first();
        if (focusableItems.length != 0) {
            firstFocusableItem[0].focus();
        }
    }
}

export function accordionTrigger(trigger) {
    cloneAccordionTrigger(trigger);
};

// New (React Fix)
function cloneAccordionTriggerReact(trigger) {
    let accordion = "[data-c-accordion='true']";
    let content = "[data-c-accordion-content]";
    if ($(trigger).parent(accordion).hasClass("active")) {
        $(trigger).attr("aria-expanded", "false");
        $(trigger).parent(accordion).removeClass("active");
        $(trigger).parent(accordion).find(content).attr("aria-hidden", "true");
    }
    else {
        $(trigger).attr("aria-expanded", "true");
        $(trigger).parent(accordion).addClass("active");
        $(trigger).parent(accordion).find(content).attr("aria-hidden", "false");
        let siblingContent = $(trigger).siblings(content);
        let focusableItems = focusable(siblingContent);
        let firstFocusableItem = $(focusableItems).first();
        if (focusableItems.length != 0) {
            firstFocusableItem[0].focus();
        }
    }
}

export function accordionTriggerReact(trigger) {
    cloneAccordionTriggerReact(trigger);
};