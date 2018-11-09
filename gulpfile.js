var exports2json = require('gulp-exports2json'),
    gulp = require('gulp');

gulp.task('default', function () {
    return gulp
        .src(['src/MarianaPro-color-theme.js'])
        .pipe(exports2json())
        .pipe(gulp.dest('themes/'));
});