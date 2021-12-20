const fs = require('fs')
const path = require('path')

const filepath = path.join(__dirname, '2.txt')

// 异步写入文件，默认（flag: 'w'）会将之前的文件内容清空  flag: 'a' 追加写入 文件不存在则创建文件
fs.writeFile(filepath, 'nodejs', { encoding: 'utf-8', flag: 'a' }, (error) => {
    console.log(error)
    console.log('end')
})

// 追加写入默认 flag: 'a' 文件不存在则创建文件
fs.appendFile(filepath, 'hello world', 'utf-8', () => {
    console.log('end')
})