const fs = require('fs')
const path = require('path')

const filepath = path.join(__dirname, 'hello.txt')

// 异步读取文件
fs.readFile(filepath, 'utf-8', (error, data) => {
    console.log(error) // 读取正常为null
    console.log(data) // 读取异常为undefind
})