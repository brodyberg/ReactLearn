"use-strict";

var gulp = require('gulp');
var connect = require('gulp-connect')        // Run a local dev server
var open = require('gulp-open')              // Open an url in a browser
var browserify = require('browserify');      // Bundler
var reactify = require('reactify');          // JSX -> js
var source = require('vinyl-source-stream'); // Use conventional text streams with gulp
var concat = require('gulp-concat');         // Concatenates files

var config = {
  port: 3000,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    js: './src/**/*.js',
    css: [
        'node_modules/bootstrap/dist/css/bootstrap.min.css'
        // theme DNE
      , 'node_modules/bootstrap/dist/css/bootstrap_theme.min.css'
    ],
    images: './src/images/*.*',
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
  gulp
    .src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload());
});

gulp.task('Move images and favicon artifacts', function() {
  gulp
    .src(config.paths.images)
    .pipe(gulp.dest(config.paths.dist + '/images'));

  gulp
    .src('./src/favicon.ico')
    .pipe(gulp.dest(config.paths.dist));
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

gulp.task('Create CSS build artifacts', function() {
  gulp
    .src(config.paths.css)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(config.paths.dist + '/css'));
})

gulp.task('Watch HTML and Javascript for changes', function() {
  gulp.watch(config.paths.html, ['Create HTML build artifacts']);
  gulp.watch(config.paths.css, ['Create CSS build artifacts']);
  gulp.watch(config.paths.js, ['Create and bundle Javascript artifacts']);
});

// what this is doing is creating the default tasks
// what *that* means is that when we use 'gulp' from 
// the command-line with no arguments, these will be 
// run
gulp.task(
  'default', 
  [ 'Create HTML build artifacts'
  , 'Create CSS build artifacts'
  , 'Create and bundle Javascript artifacts'
  , 'Move images and favicon artifacts'
  , 'Open the browser'
  , 'Watch HTML and Javascript for changes']);
