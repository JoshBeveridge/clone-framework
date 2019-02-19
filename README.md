# Clone

A lightweight, themeable design system.

Produced at [Talent Cloud](https://talent.canada.ca/).

### Getting Started

#### CDN

Coming Soon

Note: While using this version of Clone makes updates seamless, using the CDN version of Clone locks you into the theme associated to the CDN link unless you manually override styles in your project.

#### NPM

Clone is built in a way that allows you to theme the aesthetic of the system without the need to alter Clone's source files. This means that you'll be able to update Clone without any worry of losing or modifying your changes. All theming will occur in your project's root Sass directory and pull Clone's primary `.scss` file from `node_modules`.

While it doesn't matter how your project compiles Sass, theming Clone requires that your project be running [Sass](https://sass-lang.com/) and [Autoprefixer](https://github.com/postcss/autoprefixer).

Clone uses [Gulp](https://gulpjs.com/) to manage dependencies. If you haven't already, install Gulp globally by running `npm install gulp-cli -g` and `npm install gulp -D` in your terminal.

1. From inside your project, run `npm install clone-design`
2. Create a `.scss` file inside of your Sass directory that has the following:

```
// =============================================================================

    // My Custom Clone Theme
    // Please note that Clone must be included last, after all of your custom variables.

// =============================================================================

// Custom Variables ============================================================

    // All available custom variables can be found [here](https://github.com/joshdrink/Clone/blob/dev/app/scss/core/_defaults.scss)

// Include Clone ===============================================================

    @import "../node_modules/clone-design/app/scss/clone";
```

### Namespacing

Clone uses a `clone__` namespace for all of its classes and variables to avoid interfering with other libraries or the styling of your own unique elements. Classes are intended to be explicit and are contructed in the following manner:

`.namespace__block-name--optional-modifier`

A practical example of this nomenclature with 2 modifiers in use:

`.clone__background--grey--transparent`

- namespace: clone
- block: background
- modifiers: grey, transparent

You can find a list of default variables [here](https://github.com/joshdrink/Clone/blob/dev/app/scss/core/_defaults.scss).

### Dependency Checklist

[] jQuery
[] Slick Carousel
