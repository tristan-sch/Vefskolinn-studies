const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));

/* Function to compile the Sass */
function buildStyles() {
  return src('library/**/*.scss') /* Replace 'index' with '*' -> look for any file with this exstension and compile it */
    .pipe(sass())
    .pipe(dest('css'))
}

/* Function to watch the Sass to monitor changes and recompile it if needed */
function watchTask() {
  watch(['library/**/*.scss'], buildStyles) /* Replace 'index' with '*' -> same */
}

exports.default = series(buildStyles, watchTask)