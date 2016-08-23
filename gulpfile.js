"use strict";

var gulp        = require('gulp'),
    browserify  = require('browserify'),
    uglify      = require('gulp-uglify'),
    rename      = require('gulp-rename'),
    sass        = require('gulp-sass'),
    maps        = require('gulp-sourcemaps'),
    source      = require('vinyl-source-stream');

var packageJSON   = require('./package.json'),
    dependencies  = Object.keys(packageJSON && packageJSON.dependencies || {});

//TASKS

//Compile vendor scripts
gulp.task('vendors', function() {
  return browserify()
    .require(dependencies)
    .bundle()
    .pipe(source('vendor.bundle.js'))
    .pipe(gulp.dest(__dirname + '/src/browserify/libs'))
});

//Compile application scripts
gulp.task('app', function() {
  return browserify('src/scripts/app.js')
    .external(dependencies)
    .bundle()
    .pipe(source('app.bundle.js'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest(__dirname + '/src/browserify'))
});

//Compile sass
gulp.task('compileSass', function() {
  return gulp.src('src/styles/scss/app.scss')
    .pipe(maps.init())
    .pipe(sass())
    .pipe(maps.write('./'))
    .pipe(gulp.dest('src/styles/css'))
});

//Watch files
gulp.task('watchFiles', function() {
  gulp.watch('package.json', ['vendors']);
  gulp.watch('src/scripts/**', ['app']);
  gulp.watch('src/styles/scss/*.scss', ['compileSass']);
});

//Minify js scripts

//Minify css

//Build applicaction

//Serve
gulp.task('serve', ['vendors', 'app', 'compileSass', 'watchFiles']);
