const fs = require('fs')

const namelist = fs.readdirSync(__dirname) // 同步获取指定路径下的所有文件名（不包括文件夹）

console.log(namelist)