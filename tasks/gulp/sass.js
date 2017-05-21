var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    notify = require('gulp-notify'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');

/**
 * Compile files from _assets/css/source into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function() {

  var onError = function(err) {
    notify.onError({
      title:    "Gulp Sass",
      subtitle: "Sass error!",
      message:  'Error: <%= error.message %>'
    })(err);
    this.emit('end');
  };

  // Generate an animation css file to be used for the critical path
  gulp.src('source/assets/css/animation.scss')
    .pipe(plumber({errorHandler: onError}))

    .pipe(sass({
      style: 'expanded',
      onError: function(err) {
        return notify().write(err);
      }
    }))

    .pipe(autoprefixer(['last 2 versions'], {
      cascade: true
    }))

    .pipe(rename({
      basename: 'animation'
    }))

    .pipe(gulp.dest('source/_includes/criticalcss'));


  // Generate the styles from the import sass file
  gulp.src('source/assets/css/config.imports.scss')
    .pipe(plumber({errorHandler: onError}))

    // Normal version
    .pipe(sass({
      style: 'expanded',
      includePaths: ['scss'],
      onError: function(err) {
        return notify().write(err);
      }
    }))

    .pipe(autoprefixer(['last 2 versions'], {
      cascade: true
    }))

    .pipe(rename({
      basename: 'styles'
    }))

    .pipe(gulp.dest('source/assets/css'))
    .pipe(gulp.dest('_site/assets/css'))

    .pipe(browserSync.reload({
      stream: true
    }))

    // Uglified version
    .pipe(rename({
      suffix: '.min'
    }))

    .pipe(cleanCSS())

    .pipe(gulp.dest('source/assets/css'))
    .pipe(gulp.dest('_site/assets/css'));
});
