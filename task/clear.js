const del = require("del")

//Конфігурація
const path = require("../config/path.js")

//Видалення директорії
const clear = () => {
    return del(path.root)
 }

 module.exports = clear