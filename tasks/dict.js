import gulp from "gulp";
import gulpif from "gulp-if";
import gunzip from "gulp-gunzip";
import livereload from "gulp-livereload";
import through from "through2";
import args from "./lib/args";

// Quickfix for gulp-gunzip does not add base to piped files
function addBase(base) {
  return through.obj(function (file, enc, callback) {
    file.base = base;
    this.push(file);
    callback();
  });
}

gulp.task("dict", () => {
  const dictDir = "node_modules/kuromoji/dict";
  return gulp.src(`${dictDir}/**/*.dat.gz`)
    .pipe(gunzip())
    .pipe(addBase(dictDir))
    .pipe(gulp.dest(`dist/${args.vendor}/dict`))
    .pipe(gulpif(args.watch, livereload()));
});