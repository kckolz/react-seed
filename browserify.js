var browserify = require('browserify'),
    _ = require('lodash'),
    vinylizr = require('vinyl-source-stream'),
    path = require('path'),
    mkdirp = require('mkdirp'),
    gulp = require('gulp');

var babelify = require('babelify'),
    uglifyify = require('uglifyify'),
    watchify = require('watchify'),
    factorify = require('factor-bundle');

var DEST_FOLDER = 'dist/js';

var bundler = function(bundlableBrowserifyRoot) {
  return bundlableBrowserifyRoot
    .bundle()
    .on('error', function(e) {
      console.log(e.message);
      if (e.codeFrame) {
        console.log(e.codeFrame);
      }
    })
    .pipe(vinylizr("common.js"))
    .pipe(gulp.dest(DEST_FOLDER));
};

module.exports = function(entryPoints, toWatch, isProduction) {
  var bundlePoints = entryPoints.map(function(point) {
        return DEST_FOLDER + '/' + path.basename(point);
      }),
      entryPaths = entryPoints.map(function(point) {
        return './' + point;
      }),
      watchFn = toWatch ? watchify : _.identity;

  var browserifyRoot = watchFn(browserify({
    entries: [entryPaths],
    debug: !isProduction,
    cache: {},
    packageCache: {},
    fullPaths: !isProduction
  })).transform(babelify.configure({
      optional: ["runtime"]
  }));

  mkdirp.sync(DEST_FOLDER);

  if (isProduction) {
    browserifyRoot = browserifyRoot.transform({
      global: true
    }, uglifyify);
  }

  browserifyRoot = browserifyRoot.plugin(factorify, {
    o: bundlePoints
  });

  if (toWatch) {
    browserifyRoot.on('update', function() {
      return bundler(browserifyRoot);
    });
  }
  return bundler(browserifyRoot);
};
