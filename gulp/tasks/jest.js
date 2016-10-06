var gulp = require('gulp');
var util = require('gulp-util');
if(!util.env.production) {
  var jest = require('gulp-jest');
  require("harmonize")();

  gulp.task('jest', function () {

      return gulp.src('./app/assets/javascripts')
        .pipe(jest({
          scriptPreprocessor: "../../../node_modules/babel-jest",
          testFileExtensions: [
            "js",
            "jsx"
          ],
          moduleFileExtensions: [
            "js",
            "json",
            "react",
            "es6"
          ],
          testDirectoryName: "__spec__",
          unmockedModulePathPatterns: [
            "react",
            "__spec_helpers__"
          ],
          testPathIgnorePatterns: [
            "node_modules",
            "__spec_helpers__",
            "shared_examples"
          ]
        })
      );
  });
}
