var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concatCss = require('gulp-concat-css');

gulp.task('stylus', function() {
  gulp.src('source/stylus/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('source/css'));
});

gulp.task('concat-css', function() {
  return gulp.src('source/css/*.css')
    .pipe(concatCss('style.css'))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('default', ['stylus', 'concat-css'], function() {
  gulp.watch('source/stylus/*.styl', ['stylus']);
  gulp.watch('source/css/*.css', ['concat-css']);
});
