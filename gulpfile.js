// ===
// Packages
// ===

var gulp    = require('gulp');
var less    = require('gulp-less');
var jshint  = require('gulp-jshint');
var nodemon = require('gulp-nodemon');





// ===
// Tasks
// ===

// CSS task for transforming .less files to .css files
gulp.task('css', function() {
  return gulp.src('public/assets/css/style.less')
         .pipe(less())
         .pipe(gulp.dest('public/assets/css'));
});

// JS task for checking errors in .js files
gulp.task('js', function() {
  return gulp.src(['server.js', 'public/app/*.js', 'public/app/**/*.js'])
         .pipe(jshint())
         .pipe(jshint.reporter('default'));
});

// Watch task for executing task when file changes occur
gulp.task('watch', function() {
  // watch .less files
  gulp.watch('public/assets/css/style.less', ['css']);

  // watch .js files
  gulp.watch(['server.js', 'public/app/*.js', 'public/app/**/*.js'], ['js']);
});

// Nodemon task for starting server and continuous watching
gulp.task('nodemon', function() {
  nodemon({
    script: 'server.js',
    ext: 'js less html'
  })
  .on('start', ['watch'])
  .on('change', ['watch'])
  .on('restart', function() {
    console.log('Server restarted!');
  });
});

// Set nodemon as the default task
gulp.task('default', ['nodemon']);