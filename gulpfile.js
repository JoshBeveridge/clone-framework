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
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const del = require('del');
const twig = require('gulp-twig');
const gzip = require('gulp-gzip');
const rename = require('gulp-rename');

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
        return src('app/twig/*.twig')
        .pipe(twig())
        .pipe(dest('cache'));
    }

    // Slick
    // function moveSlickJS() {
    //     return src('node_modules/slick-carousel/slick/slick.min.js')
    //     .pipe(dest('app/js'));
    // }

    // function moveSlickCSS() {
    //     return src('node_modules/slick-carousel/slick/slick.scss')
    //     .pipe(dest('app/scss'));
    // }

    // Move JavaScript
    function concatScripts() {
        return src([
            'app/js/cash.min.js',
            'app/js/glider.min.js',
            'app/js/*.js'
        ])
        .pipe(concat('clone.js'))
        .pipe(dest('cache/js'));
    }

    function moveCoreScripts() {
        return src([
            'app/core/*.js'
        ])
        .pipe(dest('cache/js/core'));
    }

    function moveComponentScripts() {
        return src([
            'app/components/**/*.js'
        ])
        .pipe(dest('cache/js/components'));
    }

    // Sass
    function compileCSS() {
        return src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(postcss([autoprefixer()]))
        .pipe(dest('cache/css'));
    }

    // Minification
    function distCacheHTML() {
        return src('cache/**/*.html')
        .pipe(dest('dist'));
    }
    function distCacheJS() {
        return src('cache/js/*.js')
        .pipe(uglify())
        .pipe(rename(function(path) {
            path.extname = ".min.js";
        }))
        .pipe(dest('dist/js'));
    }
    function distCacheCSS() {
        return src('cache/css/*.css')
        .pipe(postcss([cssnano()]))
        .pipe(rename(function(path) {
            path.extname = ".min.css";
        }))
        .pipe(dest('dist/css'));
    }

    // Compression
    function compressCSS() {
        return src('dist/css/*.css')
        .pipe(gzip())
        .pipe(dest('dist/css/gzip'))
    }

    function compressJS() {
        return src('dist/js/*.js')
        .pipe(gzip())
        .pipe(dest('dist/js/gzip'))
    }

    // Cache Removal
    function cleanCache() {
        return del('cache/**/*')
    }

    // Dist Removal
    function cleanDist() {
        return del('dist');
    }

    // Compile
    const devCompile = series(template, concatScripts, moveCoreScripts, moveComponentScripts, compileCSS);
    const distCompile = series(cleanCache, template, concatScripts, compileCSS);

    // Dist
    const dist = series(distCacheHTML, distCacheJS, distCacheCSS, compressCSS, compressJS);

    // Watch
    function watchFiles() {
        watch('app/scss/**/*.scss', series(devCompile, browserSyncReload));
        watch('app/twig/**/*.twig', series(devCompile, browserSyncReload));
        watch('app/js/*.js', series(devCompile, browserSyncReload));
    }

    // Export
    exports.build = series(cleanDist, distCompile, dist);
    exports.watch = series(cleanCache, devCompile, parallel(browserSync, watchFiles));
    exports.default = series(cleanCache, devCompile, parallel(browserSync, watchFiles));
