module.exports = function() {
    var config = {
        packages: [
            './node_modules/angular/angular.js',
            './node_modules/angular-route/angular-route.js',
            './node_modules/jquery/dist/jquery.js',
            './node_modules/bootstrap/dist/js/bootstrap.min.js'
        ],
        styles: [
            './node_modules/bootstrap/dist/css/bootstrap.min.css'
        ],
        javaScript: [
            'src/**/*.js', 
            'src/*.js',
            '!gulp.config.js',
            '!gulpfile.js'
        ],
        html: [
            'src/**/*.html'
        ],
        port: 4200,
        server: './server.js',
        browserReloadDelay: 1000
        
    }
    return config;
}
