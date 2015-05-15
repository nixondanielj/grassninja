var gulp = require('gulp');
var jade = require('gulp-jade');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');

gulp.task('jade', function(){
    return gulp
        .src(
            [
                './jade/index.jade'
            ])
        .pipe(jade())
        .pipe(gulp.dest('./app'));
});

gulp.task('js-concat', function(){
    return gulp
        .src('./js/**/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./app'));
});

gulp.task('js-compile', ['js-concat'], function(){
    return gulp
        .src('./app/all.js')
        .pipe(uglify())
        .pipe(gulp.dest('./app'));
});

gulp.task('css-compile', ['css-concat'], function() {
    return gulp
        .src('./app/site.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('./app'));
});

gulp.task('css-concat', function(){
    return gulp
        .src([
            './css/custom-bootstrap.min.css', 
            './css/carousel.css', 
            './css/site.css'
        ])
        .pipe(concat('site.css'))
        .pipe(gulp.dest('./app'));
});

gulp.task('build', ['jade', 'css-compile', 'js-compile']);
gulp.task('build-dev', ['jade', 'css-concat', 'js-concat']);
gulp.task('default', ['build-dev']);