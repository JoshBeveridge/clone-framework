// =============================================================================

  // Clone
  // Authored by Josh Beveridge

  // "gulp"
  // "gulp build"

// =============================================================================

"use strict";

// Requirements ================================================================
const gulp = require('gulp');
const { series, parallel, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const browsersync = require('browser-sync').create();
const useref = require('gulp-useref');
const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const del = require('del');
const runSequence = require('run-sequence');
const twig = require('gulp-twig');

// Tasks =======================================================================

    // Browser Sync
    function browserSync(done) {
        browsersync.init({
            server: {
                baseDir: 'cache'
            },
        });
        done();
    }

    // BrowserSync Reload
    function browserSyncReload(done) {
        return src('cache/*.html')
        .pipe(browsersync.reload({
            stream: true
        }));
    }

    // Twig
    function template() {
        return src('app/twig/*.html')
        .pipe(twig())
        .pipe(dest('cache'));
    }

    // Slick
    function moveSlick() {
        return src('node_modules/slick-carousel/slick/slick.min.js')
        .pipe(dest('app/js'));
    }

    // Move JavaScript
    function concatScripts() {
        return src('app/js/*.js')
        .pipe(concat('clone.js'))
        .pipe(dest('cache/js'));
    }

    // Sass
    function compileCSS() {
        return src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(dest('cache/css'));
    }

    // Minification
    function distribute() {
        return src('cache/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(dest('dist'))
        .pipe(browsersync.reload({
            stream: true
        }));
    }

    // Dist Removal
    function cleanDist() {
        return del('dist');
    }

    // Watch
    function watchFiles() {
        watch('app/scss/**/*.scss', series(compileCSS, browserSyncReload));
        watch('app/twig/**/*.html', series(template, browserSyncReload));
        watch('app/js/**/*.js', series(concatScripts, browserSyncReload));
    }

    // Export
    exports.build = series(cleanDist, template, moveSlick, concatScripts, compileCSS, distribute);
    exports.watch = series(cleanDist, template, moveSlick, concatScripts, compileCSS, parallel(browserSync, watchFiles));
    exports.default = series(cleanDist, template, moveSlick, concatScripts, compileCSS, parallel(browserSync, watchFiles));
