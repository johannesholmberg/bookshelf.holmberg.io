var gulp = require('gulp'),
    critical = require('critical');

gulp.task('critical', function() {

  // Run critical for these different page types and generate a minified css file for each
  var base = '_site/',
      css = 'source/assets/css/styles.css',
      width = 1900,
      height = 1200,
      minify = false,
      ignore = ['@font-face'];

  // Index
  critical.generate({
    base: base,
    src: 'index.html',
    css: [css],
    dest: 'source/_includes/criticalcss/index.css',
    width: width,
    height: height,
    ignore: ignore,
    minify: minify
  });

  // Book
  critical.generate({
    base: base,
    src: 'farnhams-freehold/index.html',
    css: [css],
    dest: 'source/_includes/criticalcss/book.css',
    width: width,
    height: height,
    ignore: ignore,
    minify: minify
  });

});
