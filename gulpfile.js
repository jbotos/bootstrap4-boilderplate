// npm install gulp gulp-sass gulp-concat gulp-util path gulp-folders

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var util = require('gulp-util');
var path = require('path');
var folders = require('gulp-folders');

gulp.task('sass:default', function () {
	gulp.src('_assets/scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(concat("default.min.css"))
		.pipe(gulp.dest('_assets/css'))
});

gulp.task('default', function() {
	gulp.watch(['_assets/scss/*'], ['sass:default']);
  // place code for your default task here
});
