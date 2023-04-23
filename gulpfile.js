const gulp = require("gulp");
const concat = require('gulp-concat');
const resolveDependencies = require('gulp-resolve-dependencies');

const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

const stripImportExport = require('gulp-strip-import-export');

const replace = require('gulp-replace');

gulp.task("main", function() {
  return gulp
    .src(["src/main.ts"])
    .pipe(resolveDependencies({
      pattern: /^\s*\/\/\/\s*<\s*reference\s*path\s*=\s*(?:"|')([^'"\n]+)/gm
    }))
    .on('error', function(err) {
        console.log(err.message);
    })
    .pipe(tsProject())
    .pipe(concat('main.js'))
    .pipe(stripImportExport())
    .pipe(replace(/\/\/\/\s*<reference.*>/g, '')) // Deletes all triple slash references and allows to keep normal comments
    .pipe(replace("const getComponent", "getComponent")) // Removes the const declaration to allow direct copy and paste
    .pipe(replace(/\/\/REMOVE\s*.*/g, "")) // Removes all comments starting with REMOVE
    .pipe(replace("\n\n\n\n\n", "\n")) // This replaces a large amount of white space that is always present
    .pipe(gulp.dest("dist/"));
});