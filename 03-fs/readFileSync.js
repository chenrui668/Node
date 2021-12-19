const fs = require('fs')
const path = require('path')

const filepath = path.join(__dirname, 'hello.txt')
// 同步读取文件
const content = fs.readFileSync(filepath, 'utf-8')

console.log(content) // 不加utf-8输出buffer对象
