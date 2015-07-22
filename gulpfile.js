/*******************************
            Custom
*******************************/

var
  gulp         = require('gulp'),

  // watch for file changes and build
  watch        = require('./semantic/tasks/watch'),
  // build all files
  build        = require('./semantic/tasks/build')
;


/*******************************
             Tasks
*******************************/


gulp.task('watch-ui', 'one', watch);
gulp.task('build-ui', 'two', build);