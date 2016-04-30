var gulp = require('gulp');
var rename = require('gulp-rename');
var babel = require('gulp-babel');

gulp.task('babel-src', function() {
  gulp.src('./server/src/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./server/dist/'));
});

gulp.task('babel-serverjs', function() {
  gulp.src('./server.es6.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(rename('server.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('babel-confjs', function() {
  gulp.src('./conf.es6.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(rename('conf.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('babel-appjs', function() {
  gulp.src('./app.es6.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('babel', ['babel-serverjs', 'babel-appjs', 'babel-confjs', 'babel-src']);

gulp.task('watch', ['babel'], function() {
  gulp.watch('./server/src/**/*.js', ['babel-src']);
  gulp.watch('./server.es6.js', ['babel-serverjs']);
  gulp.watch('./app.es6.js', ['babel-appjs']);
  gulp.watch('./conf.es6.js', ['babel-confjs']);
});


gulp.task('default', ['watch']);
