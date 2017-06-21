var gulp = require('gulp'),
    csscomb = require('gulp-csscomb'),
    gcmq = require('gulp-group-css-media-queries'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    rename = require("gulp-rename"),
    uncss = require('gulp-uncss'),
    notify = require("gulp-notify");


gulp.task('autoprefixer', function() {
    return gulp.src('./style.css')
        .pipe(gcmq())
        .pipe(autoprefixer({browsers: ['last 5 versions', '> 3%']}))
        .pipe(gulp.dest('../css'))
        .pipe(notify('Autoprefixer Success!'));
});
gulp.task('Mautoprefixer', function() {
    return gulp.src('./media.css')
        .pipe(gcmq())
        .pipe(autoprefixer({browsers: ['last 5 versions', '> 3%']}))
        .pipe(gulp.dest('../css'))
        .pipe(notify('MAutoprefixer Success!'));
});
gulp.task('minCss', function() {
    return gulp.src('../css/style.css')
        .pipe(cleanCSS())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest('../css'))
        .pipe(notify('minCSS Success!'));
});

gulp.task('watch_autoprefixer', function() {
    gulp.watch('./style.css', ['autoprefixer'])
});
gulp.task('watch_Mautoprefixer', function() {
    gulp.watch('./media.css', ['Mautoprefixer'])
});
gulp.task('watch_min', function() {
    gulp.watch('../css/style.css', ['minCss'])
});


gulp.task('default', ['autoprefixer', 'Mautoprefixer', 'watch_Mautoprefixer', 'minCss', 'watch_min', 'watch_autoprefixer']);

gulp.task('cssComb', function() {
    return gulp.src('./style.css')
        .pipe(csscomb())
        .pipe(gulp.dest('./'))
        .pipe(notify('cssComb Success!'));
});

gulp.task('uncss', function () {
    return gulp.src('./style.css')
        .pipe(uncss({
            html: ['../*.html']
        }))
        .pipe(gulp.dest('./'));
});


