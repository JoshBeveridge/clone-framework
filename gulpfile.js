// =============================================================================

  // Clone
  // Authored by Josh Beveridge

  // "gulp"
  // "gulp build"

// =============================================================================

"use strict";

// Requirements ================================================================

    const gulp = require('gulp');
    const sass = require('gulp-sass');
    const browsersync = require('browser-sync').create();
    const useref = require('gulp-useref');
    const uglify = require('gulp-uglify');
    const gulpIf = require('gulp-if');
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
            browsersync.reload();
            done();
        }

    // Twig

        function template() {
            return gulp.src('app/twig/*.html')
            .pipe(twig())
            .pipe(gulp.dest('cache'))
        }

    // JavaScript

        function js() {
            return gulp.src('app/js/*.js')
            .pipe(gulp.dest('cache/js'))
        }

    // Sass

        function compileCSS() {
            return gulp.src('app/scss/**/*.scss')
            .pipe(sass())
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe(gulp.dest('cache/css'))
        }

    // Slick

        function moveSlick() {
            return gulp.src('node_modules/slick-carousel/slick/slick.min.js')
            .pipe(gulp.dest('cache/js'))
        }

    // Minification

        function distribute() {
            return gulp.src('cache/*.html')
            .pipe(useref())
            .pipe(gulpIf('*.js', uglify()))
            .pipe(gulpIf('*.css', cssnano()))
            .pipe(gulp.dest('dist'))
            .pipe(browsersync.reload({
                stream: true
            }))
        }

    // Dist Removal

        function cleanDist() {
            return del.sync('dist');
        }

    // Watch

        function watchFiles() {
            gulp.watch('app/scss/**/*.scss', gulp.series(compileCSS, distribute));
            gulp.watch('app/twig/**/*.html', gulp.series(template, distribute));
            gulp.watch('app/js/**/*.js', gulp.series(js, moveSlick, distribute));
        }

    // Build

        const build = gulp.series(cleanDist, template, js, moveSlick, compileCSS, distribute);

    // Dev

        const watch = gulp.parallel(browserSync, watchFiles);

    // Export

        exports.build = build;
        exports.watch = watch;
        exports.default = watch;
