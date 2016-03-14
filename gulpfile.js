var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var reactify = require('reactify');
gulp.task('javascript',function(){
  var b = browserify({
    entries: './public/src/index.js',
    debug: true,
    transform: [reactify]
  });
  return b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify())
      .on('error',gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public/scripts/'));
});
