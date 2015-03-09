var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');

gulp.task('default', ['watch'], function() {
});

gulp.task('build', ['browserify'], function() {
});

gulp.task('browserify', function() {
  var b = browserify({debug: true});
  b.transform(reactify);
  b.add('./src/index.js');
  return b.bundle()
    .on('error', function(e) {
      gutil.log(e.message);
      this.emit('end');
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
  gulp.start('browserify');
  gulp.watch(['./src/**/*'], ['browserify']);
});
