![GitHub package.json version](https://img.shields.io/github/package-json/v/joshdrink/clone-framework.svg)
![GitHub file size in bytes](https://img.shields.io/github/size/joshdrink/clone-framework/dist/css/gzip/clone.min.css.gz.svg?label=CSS%20%28minified%2C%20gzipped%29)
![GitHub file size in bytes](https://img.shields.io/github/size/joshdrink/clone-framework/dist/js/gzip/clone.min.js.gz.svg?label=JS%20%28minified%2C%20gzipped%29)

# Clone

Clone is a simple design framework for building websites.

Produced at [Talent Cloud](https://talent.canada.ca/).

[Visit Clone's Docs](https://designwithclone.ca/).

# Changelog

## 2.4.0

### 2.4.3
- fixes a bug with spans inside buttons

### 2.4.2
- fixes a bug introduced by `data-c-button="reset"` where borders wouldn't show on regular buttons

### 2.4.1
- fixes a missing `>` in the dialog code example
- removes forced borders from accordions in favor of the border property
  - this also means the border colour variable for accordions has been removed
- updates breadcrumbs to support `span` and `p` as the `aria-current` element
- updates buttons to require a span if using an icon
  - this also allows icons on either side of the button's content
- fixed line height of icons inside buttons
- adds `data-c-button="reset"` to allow for buttons that don't need generic button styling
  - this removes borders, backgrounds, and adds a `cursor: pointer;` value

### 2.4.0
- removes jQuery and jQuery UI in favour of Cash
- removes Slick Carousel in favour of Glider.js
- fixes the spacing on breadcrumb elements

## 2.3.0

### 2.3.15
- removes code that focuses the first element on the menu when it opens on mobile devices in favour of keeping the open/close button focused
- adds support for `auto` to `data-c-margin="tb"` and `data-c-margin="rl"`
- fixes a bug with dialogs popping out of place when closed on certain screen widths

### 2.3.14
- fixes a bug where the menu locks the body overflow on mobile devices

### 2.3.13
- includes jQuery and a minified build of jQuery UI to reduce dependency size

### 2.3.12
- changes the markup of alerts to better support floated close buttons
- fixes z-index layering of dialogs over the new menus
- adds test folder for components that are regularly modified/tested
- updates pieces of accordions, alerts, carousels so that their data attributes are specific instead of values
- reviewed all code that exists outside of `data-clone` to ensure minimal consequences of importing the system into existing projects

### 2.3.11
- fixes hover bugs on touch devices
- fixes hover colour on tags

### 2.3.10
- adds customizable, responsive menus to Clone
    - menus can be topbars or sidebars, and support up to 5 nested submenus in the `ul` structure
    - new variables have been added to facilitate cutomizing the menu
    - please see [the docs](https://designwithclone.ca/#menus) for more information
- moved Sass functions outside of the `[data-clone]` attribute
- adds light, default, and dark hover variables to account for colour disparity when the hover colour matches a background colour
- fixes inheritance bugs in inputs
- fixes a bug with icon font size in buttons

### 2.3.9
- migrates `HTML` files to `twig` files
- fixes quite a few inheritance bugs for colour, font, weight, etc.
- reduces redundancy in a few utility SCSS functions

### 2.3.8
- fixes a bug with grid elements missing `calc`
- adds a new pen folder in dist to test CodePen Integration
- adds `monospace` alternative to `mono` for `data-c-font`

### 2.3.7
- fixes a bug with the dist file nomenclature (`.min.` was missing)

### 2.3.6
- revamped `.gulpfile` to be more explicit and use modern methods for autoprefixer and cssnano
- fixed the `index.html` link to point to new URL
- migrated layouts to a more logical nomenclature (`large`, `medium`, `small`) - support for `layout`, `form`, and `copy` continues
- creates a variable to control `data-c-card`'s box shadow
- adds support for top/bottom (tb) and right/left (rl, lr) to borders
- fixes a few spacing issues with dialog headers
- fixes a bug with `data-c-font-style` not working with the `underline` value

### 2.3.5
- adds `data-c-dialog-focus` to allow for customization of which element gets focused first when a dialog is opened

### 2.3.4
- adds `data-c-card` to add reusable box shadows
- adds top/bottom, left/right shortcuts for margins and padding (`data-c-margin="tb(double)"`)
- adds shorthand for `data-c-align`
- adds support for `data-c-tag` (still needs documentation)
- changes Brave to a more cohesive theme
- removes `display: block` from `data-c-margin/padding`
  - this required updates to accordion and dialog subtitles (`span` -> `p`)
- adds variables to customize carousel colours
- fixes font scale to use custom variable

### 2.3.3
- fixes a bug with toast alerts on mobile not displaying correctly

### 2.3.2
- fixes a bug with accordion alternating colours being too light
- fixes a bug where carousel active dots would be the same colour as inactive ones

### 2.3.1
- began playing with Clone's default theme, Brave (please note that this will continue to change)
- default variable file has been reworked to be more informative and structured
- added a variable for visited link colour
- added "gray" as a colour option
- added a regular utility argument for font size
- modified the file structure for inputs
- fixed a bug where inputs were breaking outside of grids
- removed pointer events from the active breadcrumb
- added a variable for alternating table row colour
