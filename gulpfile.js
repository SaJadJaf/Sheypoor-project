/* File: gulpfile.js */

var gulp = require('gulp'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass');

gulp.task('jade', function() {
    return gulp.src('app/index.jade')
        .pipe(jade())
        .pipe(gulp.dest('dist'));
});

gulp.task("sass", function () {
    return gulp.src("app/styles/*.scss")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest("dist/styles"));
});

gulp.task('watch', function () {
    gulp.watch('app/index.jade', ['jade']);
    gulp.watch('app/styles/index.scss', ['sass']);
});

gulp.task('default', ['jade', 'sass', 'watch']);

