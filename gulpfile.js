// strictly ES5 ya lower version.
var path = require('path');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var nodePath = path.resolve('node_modules');
var packagesFiles = [
    nodePath + '/jquery/dist/jquery.js',
    nodePath + '/angular/angular.js',
    nodePath + '/angular-route/angular-route.js',
    nodePath + '/bootstrap/dist/js/bootstrap.min.js'
];

var styles = [
    nodePath + '/bootstrap/dist/css/bootstrap.min.css'
]

var sourceFiles = ['src/**/*.js', 'src/*.js']

gulp.task('packages', async function() {
    return gulp.src(packagesFiles)
            .pipe(gulp.dest('dist/vendors'));
})

gulp.task('styles', async function() {
    return gulp.src(styles)
            .pipe(gulp.dest('dist/css'));
})

gulp.task('bundle', async function () {
    return gulp.src(sourceFiles)
        .pipe($.ngAnnotate())
        .pipe($.sourcemaps.init())
        .pipe($.concat('bundle.js'))
        .pipe($.uglify())
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest('dist/js'));
})

gulp.task('default', gulp.series(['packages', 'styles', 'bundle']))
