# Clone

A lightweight, themeable design system.

### Getting Started


#### CDN

Coming Soon

#### Theming Clone

Clone is built in a way that allows you to theme the aesthetic of the system without the need to alter Clone's source files. This means that you'll be able to update Clone without any worry of losing or modifying your changes. All theming will occur in your project's root Sass directory and pull Clone's primary `.scss` file from `node_modules`.

Clone uses [Gulp](https://gulpjs.com/) to manage dependencies. If you haven't already, install Gulp globally by running `npm install gulp-cli -g` and `npm install gulp -D` in your terminal.

Theming Clone requires that your project be running [Sass](https://sass-lang.com/) and [Autoprefixer](https://github.com/postcss/autoprefixer).

1. From inside your project, run `npm install clone-design`
2. Create a `.scss` file inside of your Sass directory that has the following:

```
// =============================================================================

    // My Custom Clone Theme
    // Please note that Clone must be included last, after all of your custom variables.

// =============================================================================

// Custom Variables ============================================================

    // All available custom variables can be found at https://github.com/

// Include Clone ===============================================================

    @import "../node_modules/clone-design/app/scss/clone";
```
