var gulp = require('gulp');
var browserify = require('gulp-browserify');
var config = require('../config.json');
var notify = require('gulp-notify');
var argv = require('optimist').argv;

gulp.task('browserify', function(){
    var result = gulp.src(config.baseDir + 'js/**/entrance.js')
    .pipe(browserify({
        'insertGlobals': false
    }));


    if(!argv.p){
        result.on('error', notify.onError({
            "message": "Error: <%= error.message %>"
        }))
    };

    result.pipe(gulp.dest(config.baseDir + 'dest/js'));

    return result;
})
