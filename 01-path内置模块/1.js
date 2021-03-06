const path = require('path')

console.log(__dirname) // 获取当前文件的绝对路径，不包括文件名
console.log(__filename) // 获取当前文件的绝对路径，包括文件名

let extname = path.extname(__filename) // .js
let basename = path.basename(__filename) // 1.js
let dirname = path.dirname(__filename) // 获取指定文件的绝对路径
let parseObj = path.parse(__filename) // 把路径解析成一个对象

console.log(extname, basename, dirname)
console.log(parseObj)

// 路径拼接
// let fullpath = path.join(__dirname, '1.js')
let fullpath = path.join(__dirname, 'test', '2.js') // 多个目录层级用多个参数拼接

let fullpath2 = path.resolve('test', 'path2\\p/cc/') // C:\Node_Learn\01-path内置模块\test\path2\p\cc 会将最后的\去掉
let fullpath3 = path.join('test', 'path2\\p/cc/') // test\path2\p\cc\

console.log(fullpath, fullpath2, fullpath3)