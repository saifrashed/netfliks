'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

var styleDest = './src/assets/scss/main/*.scss';
var cssDest  = './src/assets/css';

gulp.task('scss', function () {
    return gulp.src(styleDest)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
});

gulp.task('scss:watch', function(){
    gulp.watch('./src/assets/scss/**/*.scss', gulp.series('scss'));
    // Other watchers
});
