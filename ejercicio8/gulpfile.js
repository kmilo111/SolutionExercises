var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    jsmin = require('gulp-jsmin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    mainBowerFiles = require('main-bower-files');

gulp.task('collapse', function(){
  gulp.src('src/*.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('default/'));
});

gulp.task('js-min', function () {
    gulp.src('src/js/*.js')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('default/js/'));
});

gulp.task('bower', function() {
    return gulp.src(mainBowerFiles('**/*.js' ,{debugging:true}))
        .pipe (concat ("myangularmin.js"))
        .pipe(gulp.dest("default/js/angular/"));
});
