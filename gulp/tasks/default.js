var gulp = require('gulp');
var browserifyTask = require('./browserify');

gulp.task('default', function(callback) {
  browserifyTask(callback, true);
});
