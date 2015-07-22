/*******************************
            Custom
*******************************/

var
  gulp         = require('gulp'),

  // require tasks as dependencies
  watch        = require('./semantic/tasks/watch'),
  build        = require('./semantic/tasks/build')
;


/*******************************
             Tasks
*******************************/


gulp.task('watch-ui', watch);
gulp.task('build-ui', build);

// Gulp help descriptions also work
// gulp.task('watch-ui', 'Watch UI for Semantic UI', watch);
// gulp.task('build-ui', 'Build UI for Semantic UI', build);