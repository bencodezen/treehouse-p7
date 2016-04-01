// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

// TASK: #Default
gulp.task('default', ['serve']);

// TASK: #Serve
gulp.task('serve', function() {
  gulp.watch(["app/*.html", "app/css/**/*.css"]).on('change', browserSync.reload);
  gulp.watch('app/sass/**/*.scss', ['sass']);

  browserSync.init({
    server: {
      baseDir: "./app/"
    }
  });
});

// TASK: #Sass
// Compile Sass and Autoprefix Styles
gulp.task('sass', function() {
  var cssDir = 'app/css';

  return gulp.src('app/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(cssDir))
    .pipe(autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(cssDir));
});
