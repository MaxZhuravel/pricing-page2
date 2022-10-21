const { src, dest } = require("gulp")

//Конфігурація
const path = require("../config/path.js")
const app = require("../config/app.js")

//Плагіни
const plumber = require("gulp-plumber")
const notify = require("gulp-notify")
const babel = require("gulp-babel")
const uglify = require("gulp-uglify")

//Обробка JavaScript
const js = () => {
    return src(path.js.src, {sourcemaps: true})
        .pipe(plumber({
            errorHandler:notify.onError(error => ({
                title:"JavaScript",
                message: error.message
            }))
        }))
        .pipe(babel())
        .pipe(uglify())
        .pipe(dest(path.js.dest, {sourcemaps: true}))

}

module.exports = js