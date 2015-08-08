var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');

gulp.task('stylus', function() {
  gulp.src('source/stylus/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('source/css'));
});

gulp.task('concat-css', function() {
  gulp.src(['source/css/reset.css', 'source/css/main.css'])
    .pipe(concat('style.css'))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('default', ['stylus', 'concat-css'], function() {
  gulp.watch('source/stylus/*.styl', ['stylus']);
});
