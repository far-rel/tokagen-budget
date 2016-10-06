var _            = require('lodash');
var browserify   = require('browserify');
var bundleLogger = require('../util/bundleLogger');
var config       = require('../config').browserify;
var gulp         = require('gulp');
var handleErrors = require('../util/handleErrors');
var source       = require('vinyl-source-stream');
var watchify     = require('watchify');
var babelify     = require('babelify');

var bundleConfig = config.bundleConfig;
_.extend(bundleConfig, watchify.args, { fullPaths: true });

function rebundle(b) {
  bundleLogger.start(bundleConfig.outputName);
  var result = b
    .bundle()
    .on('error', handleErrors)
    .pipe(source(bundleConfig.outputName))
    .pipe(gulp.dest(bundleConfig.dest))
    .on('end', function(){
      bundleLogger.end(bundleConfig.outputName);
    });
  return result;
}

var browserifyTask = function(callback, devMode) {
    var b = browserify(bundleConfig);
    b.transform(babelify.configure({
      ignore: /node_modules/
    }));
    if(devMode) {
        b = watchify(b);
        b.on('update', function() {
            rebundle(b);
        });
    }

    rebundle(b);

};

gulp.task('browserify', browserifyTask);

module.exports = browserifyTask;
