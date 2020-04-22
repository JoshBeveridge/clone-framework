// Clone / Gulpfile

"use strict";

// Requirements
const { series, parallel, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const browsersync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const del = require('del');
const twig = require('gulp-twig');
const gzip = require('gulp-gzip');
const rename = require('gulp-rename');

// Development Scripts

    // Browser Sync
    function browserSync(done) {
        browsersync.init({
            server: {
                baseDir: 'cache'
            },
        });
        done();
    }
    function browserSyncReload(done) {
        return src('cache/*.html')
        .pipe(browsersync.reload({
            stream: true
        }));
    }

    // Compile Twig
    function compileTwig() {
        return src('app/index.twig')
        .pipe(twig())
        .pipe(dest('cache'));
    }

    // Concatenate JavaScript
    function concatenateJavaScript() {
        return src([
            'app/core/cash.min.js',
            'app/components/carousels/glider.min.js',
            'app/core/**/*.js',
            'app/components/**/*.js',
            'app/properties/**/*.js',
            'app/patterns/**/*.js'
        ])
        .pipe(concat('clone.js'))
        .pipe(dest('cache/js'));
    }

    // Compile SCSS
    function compileSCSS() {
        return src([
            'app/clone.scss',
            'app/clone-gridless.scss'
        ])
        .pipe(sass())
        .pipe(postcss([autoprefixer()]))
        .pipe(dest('cache/css'));
    }

    // Refresh Cache
    function refreshCache() {
        return del('cache/**/*')
    }

    // Development Series
    const compile = series(compileTwig, concatenateJavaScript, compileSCSS);

    // Watch
    function watchFiles() {
        watch('app/**/*', series(compile, browserSyncReload));
    }

    // Exports

        // gulp
        exports.default = series(refreshCache, compile, parallel(browserSync, watchFiles));

        // gulp watch
        exports.watch = series(refreshCache, compile, parallel(browserSync, watchFiles));

// Production Scripts

    // Move HTML
    function moveHTML() {
        return src('cache/**/*.html')
        .pipe(dest('dist'));
    }

    // Move Import and Variables
    function moveVariables() {
        return src([
            'app/core/import.scss',
            'app/core/variables.scss'
        ])
        .pipe(dest('dist'));
    }

    // Compress JavaScript
    function compressJavaScript() {
        return src('cache/js/*.js')
        .pipe(uglify())
        .pipe(rename(function(path) {
            path.extname = ".min.js";
        }))
        .pipe(dest('dist/js'));
    }

    // GZIP JavaScript
    function gzipJavaScript() {
        return src('dist/js/*.js')
        .pipe(gzip())
        .pipe(dest('dist/js/gzip'))
    }

    // Compress CSS
    function compressCSS() {
        return src('cache/css/*.css')
        .pipe(postcss([cssnano()]))
        .pipe(rename(function(path) {
            path.extname = ".min.css";
        }))
        .pipe(dest('dist/css'));
    }

    // GZIP CSS
    function gzipCSS() {
        return src('dist/css/*.css')
        .pipe(gzip())
        .pipe(dest('dist/css/gzip'))
    }

    // Refresh Production
    function refreshProduction() {
        return del('dist');
    }

    // Production Series
    const prepareDist = series(refreshCache, compileTwig, concatenateJavaScript, compileSCSS, moveHTML, moveVariables, compressJavaScript, compressCSS, gzipJavaScript, gzipCSS);

    // Exports

        // gulp build
        exports.build = series(refreshProduction, prepareDist);
