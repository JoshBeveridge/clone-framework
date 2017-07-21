# Clone

A front-end framework that uses NPM and PostCSS.

### Getting Started

Clone uses [Yarn](https://yarnpkg.com/en/) to manage dependencies. If you haven't already, install Yarn globally by running `brew install yarn` in your Terminal. The `npm run clone` command will not work without Yarn.
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

### Features and Helpers

#### Using the Grid
Clone includes a responsive flexbox-based grid system to help with your layout struggles.

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

#### Using the Container System (Mixin)
Clone also includes a responsive container system to handle content widths throughout your layout.

The following classes are available:
```
.container-small
.container-medium
.container-large
.container-xl
```

Applying any one of these classes to a containing element in your code will provide you with an auto-centered container for your content. This is especially handy for applying consistent line lengths throughout your project. Each container has a `max-width` set in pixels in `core/settings.css`. You can update these freely and the relevant mixins contained in `core/mixins.css` will update automatically. The max-width properties are as follows:
```
.container-xsmall (max-width: 800px) or (50em)
.container-small (max-width: 1000px) or (62.5em)
.container-medium (max-width: 1140px) or (71.25em)
.container-large (max-width: 1440px) or (90em)
.container-xl (max-width: 1600px) or (100em)
```

These can also be edited on a per-project basis. By default, each element with a container class applied will have a width of 85% of the parent element. This provides a generic buffer area on each side of the container regardless of viewport. As the viewport size increases, the width of the container will decrease by pre-determined percentages in `core/mixins.css`. Again, this is fully editable for your specific project.

Example:
```
<section class="page-section__wrapper">
    <div class="page-section__container container-xl">
        Content...
    </div>
</section>
```

#### Using the Section Padding System (Mixin)
Clone also includes a responsive padding system to handle uniform spacing/padding (top and bottom) within modular page sections project-wide. This eliminates the need to include common padding values over multiple sections throughout your CSS.

Simply add the `.page-section` class to apply uniform padding to any modular section in your project. Values change per-viewport and are accessible and editable in `core/mixins.css`

Example:
```
<section class="page-section__wrapper page-section">
    <div class="page-section__container">
        Content...
    </div>
</section>
```

### Dependency Management

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
* jquery
* match-media
* modernizr
* normalize.css
* slick-carousel

#### Adding/Removing Dependencies

1. `cd assets`
2. Run `yarn add [package-name]`. Package names can be located via search [here](https://yarnpkg.com/en/).
3. Open `package.json`
4. Inside `scripts`, write a script that installs your Yarn package, and copies out the resulting asset into vendor. Finally, add your new script to the `clone` script. See `package.json` for examples.
5. `cd clone/assets`
6. `npm run clone`
7. Include your `assets/vendor/file_name.ext` resource in your HTML.
8. Profit.

**Please note that Clone uses the latest version available of any given dependency in `package.json`. If you need a specific version, replace the version number with the desired version before running `npm run clone`.**

## Changelog

###### Summer 2017 Update by Justin Bellefontaine (Part 2)

* Added `mixins.css` to `core`
* Added a `container` classing system to control widths and line lengths of content containers [(see Container System)](#using-the-container-system-mixin).
* Added a `section-padding` system to control modular page section whitespace uniformly (top and bottom) based on `$padding-unit`
* Removed `.error-type` and `.error-desc` from `settings.css`. Error pages should have their own custom Post includes on a per project basis.
* Removed the comment in `settings.css` stating that the file should not be edited on a per project basis. Global settings update frequently between projects and should be extensible.
* Changed `$p-phone` and `$l-phone` media queries to `em` units rather than `px` units.
* Added `px` value equivalents (in comments) to all media queries to make them glanceable.

###### Summer 2017 Update by Justin Bellefontaine (Part 1)

* Migrated dependency management to [Yarn](https://yarnpkg.com/en/). Removed Bower (deprecated).
* Removed `styleguide` system in favour of the upcoming [Atomic](http://bradfrost.com/blog/post/atomic-web-design/) design pattern system (coming soon).
* Removed FontAwesome and Ionicons as dependencies.
* Removed `bower_components` from `.gitignore`
* Removed `data-link-handler` system from `core.js` in favour of custom click handlers.
* Removed `inline.css` from layout options.
* Commented out `plugins` Post files by default in `style.css` (Wordpress and UI Datepicker).
* Removed icon spacing from `options.css` as FontAwesome and Ionicons are no longer included as dependencies.
* Added `menu-media-query` to `settings.css`, adding the ability to define where the "condensed" menu triggers.
* Removed trailing / closing end slashes for `<link>` tags in `index.html`
* Updated `README.md` to reflect revised workflow (Yarn).
* Removed default visual styling (border and background) for Wordpress image alignment classes in `plugins/wordpress.css`. These should be customized per project.
* Cleaned up spelling, punctuation and spacing in multiple files.

###### Summer 2017 Update by Josh Beveridge

* Refactored `post` folder to prepare Clone for packaging.
* `post` now contains the folders `core` (for core clone styles), `plugins` (for plugin specific styles), `spec` (for project specifications), and `components` (for project sections/components).
* Refactored `app.js` into a separate `core.js` file in preparation for packaging.
* `post/components/content-area.css` has been added to help speed up WYSIWYG styling.
* A font scale (1.414) has been added to `post/spec/typography.css`.
* Padding variables have been added based on a `padding-unit` variable in `post/core/settings.css`.

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
