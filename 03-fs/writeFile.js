const fs = require('fs')
const path = require('path')

const filepath = path.join(__dirname, 'hello.txt')

// 异步写入文件，会将之前的文件内容清空
fs.writeFile(filepath, 'nodejs', 'utf-8', (error) => {
    console.log(error)
    console.log('end')
})