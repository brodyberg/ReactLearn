"use-strict";

var gulp = require('gulp');
// run a local dev server
var connect = require('gulp-connect')
// open an url in a browser
var open = require('gulp-open')

var browserify = require('browserify'); // bundler
var reactify = require('reactify');     // jsx -> js
var source = require('vinyl-source-stream'); // use conventional text streams with gulp

var config = {
  port: 3000,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    js: './src/**/*.js',
    dist: './dist',
    mainJs: './src/main.js'
  }
}

// our first task
// Start a local dev server
gulp.task('Launch the web server', function() {
  connect.server({
    root: ['dist'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  })
});

// open a given file on the server
// note we say: first run connect
gulp.task('Open the browser', ['Launch the web server'], function() {

  var options = {
    uri: 'http://localhost:3000', 
    app: 'chrome' 
  }

  gulp
    .src('dist/index.html')
    .pipe(open(options));
}); 

// build/move
gulp.task('Create HTML build artifacts', function() {
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload());
});

gulp.task('Create and bundle Javascript artifacts', function() {
  browserify(config.paths.mainJs)
    .transform(reactify)
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.dist + '/scripts'))
    .pipe(connect.reload());
})

gulp.task('Watch HTML and Javascript for changes', function() {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['js']);
});

// what this is doing is creating the default tasks
// what *that* means is that when we use 'gulp' from 
// the command-line with no arguments, these will be 
// run
gulp.task(
  'default', 
  [ 'Create HTML build artifacts'
  , 'Create and bundle Javascript artifacts'
  , 'Open the browser'
  , 'Watch HTML and Javascript for changes']);
