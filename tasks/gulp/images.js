var gulp = require('gulp'),
    imageResize = require('gulp-image-resize'),
    rename = require('gulp-rename');

gulp.task('resize-images', function() {
  // Should be used from the console with `gulp resize-images`
  var source = 'source/uploads/*';
  var dest = 'source/uploads/dist/';

  gulp.src(source)
    .pipe(imageResize({
      width: 400,
      imageMagick: true
    }))
    .pipe(rename({
      suffix: '-400'
    }))
    .pipe(gulp.dest(dest));

  gulp.src(source)
    .pipe(imageResize({
      width: 200,
      imageMagick: true
    }))
    .pipe(rename({
      suffix: '-200'
    }))
    .pipe(gulp.dest(dest));

});
