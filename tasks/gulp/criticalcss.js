const gulp = require('gulp'),
      critical = require('critical');

gulp.task('critical', function() {

  const base = './',
        css = '_site/assets/css/styles.css',
        width = 1400,
        height = 1100,
        minify = false,
        ignore = ['@font-face'];

  critical.generate({
    base: base,
    src: '_site/index.html',
    dest: 'source/_includes/criticalcss/index.css',
    css: css,
    width: width,
    height: height,
    minify: minify,
    ignore: ignore,
  });

  critical.generate({
    base: base,
    src: '_site/the-glass-castle/index.html',
    dest: 'source/_includes/criticalcss/book.css',
    css: css,
    width: width,
    height: height,
    minify: minify,
    ignore: ignore,
  });

});
