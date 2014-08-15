var gulp = require('gulp');
var rjs = require('gulp-requirejs');
var uglifyJs = require('gulp-uglify');
var minifyCSS = require('gulp-cssmin');
var less = require('gulp-less');
var concat = require('gulp-concat');

var paths = {
	target: '.tmp/public',
	assets: [
		'assets/**',
		'!assets/js/angular/*.js',
		'!assets/js/angular/*/*.js',
		'!assets/js/angular/*/*/*.js',
		'!assets/styles/*.css',
		'!assets/styles/*.less'
	],
	assetsToWatch: [
		'assets/**',
		'!assets/js/vendor/**'
	]
};

var cssFiles = {
	old: [
		'assets/js/vendor/angular-loading-bar/build/loading-bar.min.css',
		'assets/js/vendor/toastr/toastr.min.css',
		'assets/js/vendor/select2/select2.css',
		'assets/styles/style.old.css'
	],
	new: [
		'assets/js/vendor/angular-loading-bar/build/loading-bar.min.css',
		'assets/styles/reset.css',
		'assets/styles/jquery.nouislider.css',
		'assets/styles/style.less'
	]
};

gulp.task('uglifyJs', function () {
	rjs({
		baseUrl: "assets/js/angular",
		name: "TestLegends",
		mainConfigFile: "assets/js/angular/TestLegends.js",
		out: "testlegends.min.js"
	})
	.pipe(uglifyJs())
	.pipe(gulp.dest(paths.target + '/js/angular'));
});

gulp.task('minifyCSS', function () {
	gulp.src(cssFiles.new)
		.pipe(concat('style.min.less'))
		.pipe(less())
		.pipe(minifyCSS())
		.pipe(gulp.dest(paths.target + '/styles'));

	gulp.src(cssFiles.old)
		.pipe(concat('style.old.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest(paths.target + '/styles'));
});

gulp.task('compileAssets', function () {
	gulp.src(paths.assets)
		.pipe(gulp.dest(paths.target));
});

gulp.task('watch', function () {
	gulp.watch(paths.assetsToWatch, ['uglifyJs', 'minifyCSS', 'compileAssets']);
});

gulp.task('default', ['uglifyJs', 'minifyCSS', 'compileAssets', 'watch']);
