// =============================================================================

  // Clone
  // Authored by Josh Beveridge

  // "gulp"
  // "gulp build"

// =============================================================================

// Requirements ================================================================

    var gulp = require('gulp');
    var sass = require('gulp-sass');
    var browserSync = require('browser-sync').create();
    var useref = require('gulp-useref');
    var uglify = require('gulp-uglify');
    var gulpIf = require('gulp-if');
    var autoprefixer = require('gulp-autoprefixer');
    var cssnano = require('gulp-cssnano');
    var del = require('del');
    var runSequence = require('run-sequence');
    var twig = require('gulp-twig');

// Tasks =======================================================================

    // Browser Sync

        gulp.task('browserSync', function() {
            browserSync.init({
                server: {
                    baseDir: 'cache'
                },
            })
        })

    // Twig

        gulp.task('twig', function() {
            return gulp.src('app/twig/*.html')
            .pipe(twig())
            .pipe(gulp.dest('cache'))
            .pipe(browserSync.reload({
                stream: true
            }))
        });

    // JavaScript

        gulp.task('js', function() {
            return gulp.src('app/js/*.js')
            .pipe(gulp.dest('cache/js'))
            .pipe(browserSync.reload({
                stream: true
            }))
        });

    // Sass

        gulp.task('sass', function(){
            return gulp.src('app/scss/**/*.scss')
            .pipe(sass())
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe(gulp.dest('cache/css'))
            .pipe(browserSync.reload({
                stream: true
            }))
        });

    // Watch

        gulp.task('watch', gulp.series(['browserSync', 'sass', 'twig', 'js'], function (){
            gulp.watch('app/scss/**/*.scss', gulp.parallel(['sass']));
            gulp.watch('app/twig/**/*.html', gulp.parallel(['twig']));
            gulp.watch('app/js/**/*.js', gulp.parallel(['js']));
        }));

    // Minification

        gulp.task('useref', function(){
            return gulp.src('cache/*.html')
            .pipe(useref())
            .pipe(gulpIf('*.js', uglify()))
            .pipe(gulpIf('*.css', cssnano()))
            .pipe(gulp.dest('dist'))
        });

    // Dist Removal

        gulp.task('clean:dist', function() {
            return del.sync('dist');
        });

    // Build

        gulp.task('build', gulp.series(['clean:dist', 'twig', 'js', 'sass', 'useref'], function (callback) {
            callback
        }));

    // Dev

        gulp.task('default', gulp.series(['twig', 'js', 'sass', 'browserSync', 'watch'], function (callback) {
            callback
        }));
