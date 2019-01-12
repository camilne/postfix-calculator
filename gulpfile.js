const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
const tslint = require('gulp-tslint');
const babel = require('gulp-babel');

gulp.task('ts', function() {
    return tsProject.src()
        .pipe(tslint({
            formatter: 'stylish'
        }))
        .pipe(tslint.report({
            emitError: false
        }))
        .pipe(tsProject())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series('ts'));
gulp.task('watch', gulp.series('ts', function() {
    return gulp.watch('src/**/*.ts', gulp.series('ts'));
}));