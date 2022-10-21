const { src, dest } = require("gulp")

//Конфігурація
const path = require("../config/path.js")
const app = require("../config/app.js")

//Плагіни
const plumber = require("gulp-plumber")
const notify = require("gulp-notify")
const imagemin = require("gulp-imagemin")

//Обробка Image
const img = () => {
    return src(path.img.src)
        .pipe(plumber({
            errorHandler:notify.onError(error => ({
                title:"Image",
                message: error.message
            }))
        }))
        .pipe(imagemin(app.imagemin))
        .pipe(dest(path.img.dest))
}

module.exports = img