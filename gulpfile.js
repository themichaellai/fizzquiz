var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('default', ['watch'], function() {
});

gulp.task('build', ['browserify'], function() {
});

gulp.task('browserify', function() {
  return browserify('./src/index.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', ['browserify'], function() {
  gulp.watch(['./src/**/*.js'], ['browserify']);
});
