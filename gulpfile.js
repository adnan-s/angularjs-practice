var gulp = require('gulp');
var config = require('./gulp.config')();
var $ = require('gulp-load-plugins')();
var del = require('del');
var port = process.env.PORT || config.port;
var browserSync = require('browser-sync');

var tasks = {
    default: 'default',
    clean: 'clean',
    css: 'css',
    packages: 'packages',
    html: 'html',
    javaScript: 'javaScript',
    devServer: 'dev-server'
}

function startBrowsersync() {
    console.log('Sync in action...');
    if (browserSync.active) {
        return;
    }

    var options = {
        proxy: 'localhost:3000',
        port: port,
        files: [config.javaScript, config.html],
        injectChanges: true,
        logFileChanges: true,
        logLvel: 'debug',
        logPrefix: 'gulp-patterns',
        notify: true,
        reloadDelay: 1000,
        ghostMode: {
            clicks: true,
            location: false,
            forms: true,
            scroll: true
        }
    };

    browserSync(options);
}

gulp.task(tasks.clean, async function (done) {
    console.log('*** Deleting dist folder ***');
    return del('dist', done)
})

gulp.task(tasks.packages, async function () {
    console.log('*** Copying npm-packages ***');
    return gulp.src(config.packages)
        .pipe(gulp.dest('dist/vendors'));
})

gulp.task(tasks.css, async function () {
    console.log('*** Copying Bootstrap ***');
    return gulp.src(config.styles)
        .pipe(gulp.dest('dist/css'));
})

gulp.task(tasks.html, async function () {
    console.log('*** Copying html ***');
    return gulp.src(config.html)
        .pipe(gulp.dest('dist'));
});

gulp.task(tasks.javaScript, async function () {
    console.log('*** Transpiling Javascript ***');
    return gulp.src(config.javaScript)
        .pipe($.ngAnnotate())
        .pipe($.sourcemaps.init())
        .pipe($.concat('bundle.js'))
        .pipe($.uglify())
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest('dist/js'));
})

gulp.task(tasks.devServer, function () {
    var isDev = true;
    var nodemonOptions = {
        server: config.server,
        delayTime: 1,
        env: {
            'PORT': port,
            'NODE-ENV': isDev ? 'dev' : 'prod'
        },
        watch: [
            'src/**/*.html',
            'src/**/*.js',
            'src/*.js'
        ]
    }
    return $.nodemon(nodemonOptions)
        .on('restart', function (event) {
            console.log(' *** restarting dev server ***');
            console.log('* files changed on restart:\n' + event);
            startBrowsersync();
        })
        .on('start', function () {
            console.log('*** gulp nodemon started ***');
            setTimeout(function () {
                browserSync.notify('reloading now ...');
                browserSync.reload({ stream: false });
            }, config.browserReloadDelay);
            startBrowsersync();
        })
        .on('crash', function () {
            console.log('*** gulp nodemon crash ***');
        })
        .on('exit', function () {
            console.log('*** gulp clean exit ***');
        })
})

gulp.task(tasks.default, gulp.series(tasks.clean,
    tasks.packages,
    tasks.css,
    tasks.html,
    tasks.javaScript,
    function () {
        gulp.watch(config.javaScript, gulp.series(['javaScript']));
        gulp.watch(config.html, gulp.series(['html']));
        gulp.watch(config.styles, gulp.series(['css']));

        console.log('*** watching for change ***');
    }));
