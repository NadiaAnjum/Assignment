var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
 
var TEMPLATE_HEADER = '\'use strict\'; UserTemplates.$inject = [\'$templateCache\']; function UserTemplates ($templateCache) {';

var TEMPLATE_FOOTER = '} export default UserTemplates;';

gulp.task('default', function () {
  return gulp.src('html_templates/**/*.html')
    .pipe(templateCache('user_templates.js', {
		templateHeader: TEMPLATE_HEADER,
		templateFooter: TEMPLATE_FOOTER
	}))
    .pipe(gulp.dest('app'));
});