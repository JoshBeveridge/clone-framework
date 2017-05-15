# Clone

A front-end framework that uses NPM and PostCSS.

### Getting Started

1. Clone Clone.
2. `cd clone/assets`
3. `npm install`
4. `npm run clone`
5. Profit.

### PostCSS

Clone includes the following processors by default:
* postcss-import
* postcss-mixins
* postcss-nested
* autoprefixer
* postcss-simple-vars
* postcss-color-function
* cssnano

#### Compiling PostCSS

1. `cd clone/assets`
2. `npm run watch`
3. CSS away!

#### Using the Grid
Clone includes a responsive flexbox-based grid system to help with your layout stuggles.

The structure works as follows:
```
<div class="flex-grid">
    <div class="box small-1of2 med-1of3 lg-1of5">
        <!-- Content -->
    </div>
</div>
```

The `.flex-grid` class is required on the grid itself, while grid items are required to have the `.box` class. `.small-XofX`, `.med-XofX`, and `.lg-XofX` are used to address column width based on viewports:
* small refers to mobile devices
* medium refers to portrait tablet devices
* large refers to landscape tablet devices

The `XofX` portion of the class can span up to 12 columns (e.g. 1of2, 3of12).

To create a full width item, you can use the `.full`, `.small/med/lg-1of1`, or `.small/med/lg-full` classes.

#### Editing PostCSS Processors

1. Open `package.json`
2. Add your NPM Package to the `devDependencies` list.
3. Add your NPM Package to `postcss.config.js`. **Verify the order of your packages to avoid complications. Most packages should be included after `postcss-nested` and before `cssnano`.**
4. `cd clone/assets`
5. `npm install`
6. `npm run watch`
7. Profit.

### Editing Vendor Dependencies

Clone includes the following dependencies by default:
* Font Awesome
* Ionicons
* jQuery
* Match Media
* Modernizr
* Normalize

#### Adding/Removing Dependencies

1. Open `bower.json`
2. Add your Bower Package to the `dependencies` list.
3. Open `package.json`
4. Inside `scripts`, write a script that installs your Bower Package, and copies out the resulting asset into vendor. Finally, add your new script to the `clone` script. See `package.json` for examples.
5. `cd clone/assets`
6. `npm run clone`
7. Include your `assets/vendor/file_name.ext` resource in your HTML.
8. Profit.

**Please note that Clone uses `latest` in `bower.json` to pull down the most recent version of all default dependencies. If you need a specific version, replace `latest` with the correct version number before running `npm run clone`.**

## Changelog

###### Spring 2017 Update by Josh Beveridge

* Updated PostCSS-CLI to 3.0.
* Added cross-system notifications for completed PostCSS compilation.
* Added folder specific `.gitignore` to `assets`.
* Removed default favicons.

###### December 2016 Update by Josh Beveridge

* Removed "Content Typography" from `typography.css`.
* Fixed a bug where the CSS import was looking for the wrong file.
* Disabled the margin value on Ionicons and Font Awesome icons by default.
* Moved the `section` CSS into the "Section" area in `settings.css`.
* Disabled the Typekit Font Pop fix by default.
* Removed the `opacity: 0;` on `html` by default.
* Re-added `.page-container` and `.content-container` classes to `settings.css`.

###### Fall 2016 Update by Justin Bellefontaine

* A fix for the Typekit font pop has been added. The `<html>` tag is set to `opacity:0` by default then changed to `opacity:1` when webfonts have been loaded in completely. Please note that this only functions if Typekit fonts are included on the page. If you are not using Typekit, remove `opacity:0` from the `<html>` tag in `index.html`.
* `style.css` has been fully reorganized and indented for better readability and searchability.
* All images included via a Wordpress WYSIWYG are now given a wrapper with a class of `wp-image__wrapper`. The image itself is also classed as `wp-image`. If this is not required, or needs to be edited, it can be found at line 59 of `app.js`.
* Gravity Forms styles and presets have been added. This includes basic field styling, custom checkboxes and radio buttons, validation, and even the jQuery UI Datepicker plug-in. Form styles are modular and can be disabled or enabled via `style.css` or `/post/spec/forms/forms-base.css` (see `@imports`). Additionally, form presets such as field border, color, and fonts are manageable globally in `/post/spec/forms/forms-variables.css`.
* A fix for incorrect SVG dimensions in IE11 has been implemented.
* The "outdated browser" note now appears in Internet Explorer 9 and below (previously 8 and below) and has been assigned default styles which pins it to the top of the page for high visibility.
* New helper classes have been added to allow for easy padding changes on any given element (`flush-top`, `flush-bottom` and `flush`). This is especially useful for successive sections.
* The flexbox grid has been updated to support `xl` classes.
* The flexbox grid has been adapted to Internet Explorer 11 using `max-width`.
* Ionicons are now included by default.
* Favicon inclusion code has been removed from `index.html`. This is always changing, so as such it should not be included as a default.
* Minor spacing, commenting and indentation fixes in most Post and HTML files.
