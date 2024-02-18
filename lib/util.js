
const path = require('path')

function getCurrentDirPath(dirName) {
    const dist =  path.resolve(process.cwd(), dirName)
    return dist
}




exports.getCurrentDirPath = getCurrentDirPath