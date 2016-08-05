var gulp = require('gulp'),
    concat = require('gulp-concat'),
    htmlmin = require('gulp-htmlmin');
    uglify = require('gulp-uglify');
    jsmin = require('gulp-jsmin');
    rename = require('gulp-rename');

gulp.task('concat-js', function(){
        return gulp.src('js/*.js')
        .pipe(concat('js-min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('default/js/'));
});

gulp.task('build-html', function(){
  gulp.src('views/*.html')
  .pipe(htmlmin())
  .pipe(gulp.dest('default/'));
});

gulp.task('collapse', function(){
  gulp.src('views/*.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('default/'));
});

gulp.task('js-min', function () {
    gulp.src('js/*.js')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('default/js/'));
});

