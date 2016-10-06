var gulp = require('gulp');
var util = require('gulp-util');
if (!util.env.production) {
  var eslint = require('gulp-eslint');

  gulp.task('lint', function () {
    return gulp.src('./app/assets/javascripts/**')
      .pipe(eslint('.eslintrc'))
      .pipe(eslint.format());
  });
}
