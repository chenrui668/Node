const fs = require('fs')
const path = require('path')

// fs.renameSync('hello.txt', '1.txt') // 直接修改当前路径下的文件名

const oldPath = path.join(__dirname, 'test1', '2.js')
const newPath = path.join(__dirname, 'test', '4.js')

fs.renameSync(oldPath, newPath) // 修改文件的路径（包括文件名），前提是对应路径存在