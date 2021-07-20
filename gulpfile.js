const { src, dest, watch, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-dart-sass');


function browsersyncServe(cb) {
    browserSync.init({
        server: {
            baseDir: './',
        },
    });
    cb();
}

function watchTask() {
    watch(['./*.html']).on('change', browserSync.reload);
    watch(['./scss/*.scss']).on(
        'change',
        series(sassTask, browserSync.reload)
    );
    watch(['./js/*.js']).on('change', browserSync.reload);

}

function sassTask() {
    return src('./scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.init())
        .pipe(dest('./css/'));
}

exports.default = parallel(browsersyncServe, watchTask, sassTask);
