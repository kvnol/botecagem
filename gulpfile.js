const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

const files = {
  css: [
    'node_modules/normalize.css/normalize.css',
    'src/assets/sass/main.sass'
  ],
  js: ['src/assets/js/*']
};

gulp.task('views', function() {
  return gulp.src('src/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('dist'));
});

gulp.task('styles', function() {
  return gulp.src(files.css)
    .pipe(sass())
    .pipe(concat('main.css'))
    .pipe(gulp.dest('dist/assets/css'));
});

gulp.task('scripts', function() {
  return gulp.src(files.js)
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/assets/js'));
});

gulp.task('default', ['views', 'styles', 'scripts']);