"use-strict";

var gulp = require('gulp');
// run a local dev server
var connect = require('gulp-connect')
// open an url in a browser
var open = require('gulp-open')

var config = {
  port: 3000,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    dist: './dist'
  }
}

// our first task
// Start a local dev server
gulp.task('connect', function() {
  connect.server({
    root: ['dist'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  })
});

// open a given file on the server
// note we say: first run connect
gulp.task('open', ['connect'], function() {

  var options = {
    uri: 'http://localhost:3000', 
    app: 'chrome' 
  }

  gulp
    .src('dist/index.html')
    .pipe(open(options));
}); 

// build/move
gulp.task('html', function() {
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload());
});

// what this is doing is creating the default tasks
// what *that* means is that when we use 'gulp' from 
// the command-line with no arguments, these will be 
// run
gulp.task('default', ['html', 'open']);
