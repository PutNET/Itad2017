var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function(){
    browserSync.init({
        server: {
            baseDir: "./"
        },
        startPath: "index.html"
    });
});

gulp.task('sass', function() {
    return gulp.src('src/styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
        stream: true
    }));
});

gulp.task('default', ['watch']);
gulp.task('watch', ['browserSync', 'sass'], function(){
    gulp.watch('src/styles/*.scss', ['sass']);
    gulp.watch('./index.html', browserSync.reload);
});
