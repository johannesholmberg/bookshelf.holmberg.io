const gulp = require('gulp'),
      critical = require('critical');

gulp.task('critical', function() {

  const base = './',
        css = '_site/assets/css/styles.css',
        widthLarge = 1400,
        heightLarge = 1100,
        widthSmall = 400,
        heightSmall = 600,
        minify = false,
        ignore = ['@font-face'];

  critical.generate({
    base: base,
    src: '_site/index.html',
    dest: 'source/_includes/criticalcss/index.css',
    css: css,
    dimensions: [{
      width: widthSmall,
      height: heightSmall
    }, {
      width: widthLarge,
      height: heightLarge
    }],
    minify: minify,
    ignore: ignore,
  });

  critical.generate({
    base: base,
    src: '_site/the-glass-castle/index.html',
    dest: 'source/_includes/criticalcss/book.css',
    css: css,
    dimensions: [{
      width: widthSmall,
      height: heightSmall
    }, {
      width: widthLarge,
      height: heightLarge
    }],
    minify: minify,
    ignore: ignore,
  });

});
