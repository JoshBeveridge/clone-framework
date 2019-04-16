# Clone

A lightweight, themeable design system.

Produced at [Talent Cloud](https://talent.canada.ca/).

### Editing Clone

Clone uses [Gulp](https://gulpjs.com/) to manage dependencies. If you haven't already, install Gulp globally by running `npm install gulp-cli -g` and `npm install gulp -D` in your terminal.

### Getting Started

#### NPM

Clone is built in a way that allows you to theme the aesthetic of the system without the need to alter Clone's source files. This means that you'll be able to update Clone without any worry of losing or modifying your changes. All theming will occur in your project's root Sass directory and pull Clone's primary `.scss` file from `node_modules`.

While it doesn't matter how your project compiles Sass, theming Clone requires that your project be running [Sass](https://sass-lang.com/), [Autoprefixer](https://github.com/postcss/autoprefixer), [jQuery](https://jquery.com/), and [Slick Carousel](http://kenwheeler.github.io/slick/).

1. From inside your project, run `npm install clone-framework`
2. Create a `.scss` file inside of your Sass directory that has the following:

```
// =============================================================================

    // My Custom Clone Theme
    // Please note that Clone must be included last, after all of your custom variables.

// =============================================================================

// Custom Variables

    // All available custom variables can be found at https://github.com/joshdrink/Clone/blob/dev/app/scss/core/_defaults.scss

// Include Clone

    @import "../node_modules/clone-framework/app/scss/clone";

```

You'll also want to copy the Javascript file located at `/node_modules/clone-framework/dist/js/app.min.js` as this will allow you to use Clones interactive components (accordions, dialogs, front-end form validation, etc.). Keep in mind that when you update Clone through Node to copy this JavaScript file over to ensure you have the latest copy.

#### CDN

Coming Soon!

Stable Release: 2.2.4

CSS: https://cdn.jsdelivr.net/npm/clone-framework@2.2.4/dist/css/clone.min.css

JS: https://cdn.jsdelivr.net/npm/clone-framework@2.2.4/dist/js/clone.min.js

### Usage

Clone uses HTML5 custom data attributes to allow for easy, standardized, namespaced access to styles. Clone data attributes are prefixed with `data-clone` and in some cases, allow direct manipulation of styles.

In order for Clone's styles to apply to your markup, wrap your parent element in `data-clone`, or alternatively, place `data-clone` on your `<body>` element to apply Clone to your whole site.

The following are Clone's current data attributes:

#### Accordion

Usage: `data-c-accordion="OPTIONS"`

Accordion attributes are used exclusively to define the moving parts of an accordion:
- `data-c-accordion="object"`
- `data-c-accordion="trigger"`
- `data-c-accordion="content"`
- `data-c-accordion="icon--add"`
- `data-c-accordion="icon--remove"`

#### Alert

Usage: `data-c-alert="ALERT-TYPE"`

#### Alignment

Usage: `data-c-alignment="TEXT-ALIGNMENT"`

#### Backgrounds

Usage: `data-c-background="THEME-COLOUR(ALPHA-VALUE)"`

#### Borders

Usage: `data-c-border="ORIENTATION(THICKNESS, STYLE, THEME-COLOUR)"`

#### Buttons

Usage: `data-c-button="STYLE(THEME-COLOUR)"`

#### Carousels

Usage: `data-c-carousel="OPTIONS"`

#### Containers

Usage: `data-c-container="STYLE"`

#### Dialogs

`data-c-dialog`
`data-c-dialog-id`
`data-c-dialog-action`
`data-c-dialog-overlay`

#### Fonts

Usage: `data-c-font="STYLE"`

##### Font Colour

Usage: `data-c-font-colour="THEME-COLOUR"`

##### Font Style

Usage: `data-c-font-style="STYLE"`

##### Font Weight

Usage: `data-c-font-weight="NUMBER/VALUE"`

#### Grid & Grid Items

Usage (Grid): `data-c-grid="OPTIONS"`

Usage (Grid Items): `data-c-grid-item="OPTIONS"`

#### Headings

Usage: `data-c-heading="HVALUE"`

#### Inputs

Usage: `data-c-input="TYPE"`

Inputs can be classified by their HTML type (and a few other custom types):
- `data-c-input="button"`
- `data-c-input="checkbox"`
- `data-c-input="date"`
- `data-c-input="email"`
- `data-c-input="number"`
- `data-c-input="password"`
- `data-c-input="radio"`
- `data-c-input="range"` * NOT DONE
- `data-c-input="select"`
- `data-c-input="text"`
- `data-c-input="textarea"`
- `data-c-input="upload"` * NOT DONE
- `data-c-input="url"`

Other accompanying attributes:
- `data-c-required` is applied to any input block that contains a form element with the `required` attribute.
- `data-c-invalid` is applied to any input block that is validated by HTML5 and returned as invalid.

#### Margins

Usage: `data-c-margin="ORIENTAION(AMOUNT)"`

#### Overlays

Usage: `data-c-overlay="THEME-COLOUR(ALPHA-VALUE)

#### Padding

Usage: `data-c-padding="ORIENTAION(AMOUNT)"`

#### Radius

Usage: `data-c-radius="STYLE"`

#### Skip to Content

Usage: `data-c-skip-content`

#### Visibility

Usage: `data-c-visibility="VALUE"`

You can find a list of default variables [here](https://github.com/joshdrink/Clone/blob/dev/app/scss/core/_defaults.scss).

### Dependency Checklist

- [ ] Sass
- [ ] Autoprefixer
- [ ] jQuery
- [ ] Slick Carousel
