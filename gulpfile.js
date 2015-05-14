var gulp = require('gulp');
var jade = require('gulp-jade');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');

gulp.task('jade', function(){
    return gulp
        .src(
            [
                './jade/index.jade'
            ])
        .pipe(jade())
        .pipe(gulp.dest('./app'));
});

gulp.task('js-dev', function(){
    return gulp
        .src('./js/**/*.js')
        .pipe(uglify({ compress: false, mangle: false }))
        .pipe(gulp.dest('./app'));
});

gulp.task('js', function(){
    return gulp
        .src('./js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./app'));
});

gulp.task('css', function() {
    return gulp
        .src('./css/*.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('./app'));
});

gulp.task('build-dev', ['jade', 'js-dev', 'css']);
gulp.task('build', ['jade', 'js', 'css']);
gulp.task('default', ['build-dev']);