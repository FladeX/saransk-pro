var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');

gulp.task('stylus', function() {
  gulp.src('source/stylus/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('source/css'));
});

gulp.task('concat', function() {
  return gulp.src('source/js/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('assets/js/'));
});

gulp.task('concat-css', function() {
  return gulp.src('source/css/*.css')
    .pipe(concatCss('style.css'))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('default', ['stylus', 'concat', 'concat-css'], function() {
  gulp.watch('source/stylus/*.styl', ['stylus']);
  gulp.watch('source/js/*.js', ['concat']);
  gulp.watch('source/css/*.css', ['concat-css']);
});
