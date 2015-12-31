var gulp = require('gulp'),
    cache = require('gulp-cache'),
    less = require('gulp-less');
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    del = require('del'),
    glob = require('glob'),
    browserifier = require('./browserify');

var args = require('yargs').alias('P', 'production').argv,
    production = args.production;

var paths = {
  styles: 'css/**/*',
  javascript: 'js/app.js',
  fonts: 'fonts/**/*',
  images: 'img/**/*'
};

gulp.task('styles', function () {
  gulp.src(paths.styles)
    .pipe(less())
    .pipe(concat('app.css'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('fonts', function() {
  gulp.src(paths.fonts)
  .pipe(gulp.dest('dist/fonts'));
});

gulp.task('images', function() {
  gulp.src(paths.images)
  .pipe(gulp.dest('dist/img'));
});

var jsFactorFactory = function(toWatch) {
  return function() {
    glob(paths.javascript, function(err, files) {
      return browserifier(files, toWatch, !!production);
    });
  }
};

gulp.task('javascript', jsFactorFactory(false));
gulp.task('javascript-watch', jsFactorFactory(true));

gulp.task('clean', function (done) {
  del(['dist/css', 'dist/js']);
  return cache.clearAll(done);
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.styles, ['styles']);
  livereload.listen();
  gulp.watch(['dist/**']).on('change', livereload.changed);
});

gulp.task('build', ['styles', 'javascript', 'fonts','images']);
gulp.task('start', ['styles', 'javascript-watch', 'fonts', 'images', 'watch']);

