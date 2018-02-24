let gulp = require('gulp'),
	cleanCSS = require('gulp-clean-css'),
	rename = require('gulp-rename');

gulp.task('minify-css', () => {
  return gulp.src([
  			'!css/animate.min.css', // ignore
	  		'css/*.css'
  		]
  	)
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('css/minified/'));
});