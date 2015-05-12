var gulp = require('gulp');
var jade = require('gulp-jade');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');

gulp.task('jade', function(){
    return gulp
        .src('./jade/**/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('./dist'));
});

gulp.task('js-dev', function(){
    return gulp
        .src('./js/**/*.js')
        .pipe(uglify({ compress: false }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('js', function(){
    return gulp
        .src('./js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

gulp.task('css', function() {
  return gulp.src('styles/*.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('./dist'));
});

gulp.task('build-dev', ['jade', 'js-dev', 'css']);
gulp.task('build', ['jade', 'js', 'css']);
gulp.task('default', ['build-dev']);