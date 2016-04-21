# Clone

A front-end framework that uses NPM and PostCSS.

<hr>

### Getting Started

1. Clone Clone.
2. `cd clone/assets`
3. `npm install`
4. `npm run clone`
5. Profit.

### PostCSS

#### Compiling PostCSS

1. `cd clone/assets`
2. `npm run watch`
3. CSS away!

#### Editing PostCSS Processors

1. Open `package.json`
2. Add your NPM Package to the `devDependencies` list.
3. Add your NPM Package to the `post` script using `-u packageName`. **Verify the order of your packages to avoid complications. Most packages should be included after `postcss-nested` and before `cssnano`.**
4. `cd clone/assets`
5. `npm install`
6. `npm run watch`
7. Profit.

### Editing Vendor Dependencies

1. Open `bower.json`
2. Add your Bower Package to the `dependencies` list.
3. Open `package.json`
4. Inside `scripts`, write a script that installs your Bower Package, and copies out the resulting asset into vendor. Finally, add your new script to the `clone` script. See `package.json` for examples.
5. `cd clone/assets`
6. `npm run clone`
7. Include your `assets/vendor/file_name.ext` resource in your HTML.
8. Profit.

**Please note that Clone uses `latest` in `bower.json` to pull down the most recent version of all default dependencies. If you need a specific version, replace `latest` with the correct version number before running `npm run clone`.**
