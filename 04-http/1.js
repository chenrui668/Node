const http = require('http')

// 配置服务器的端口号
const port = 8080

// 创建服务器对象
const server = http.createServer((request, response) => {
    console.log(request)
    response.end('hello world')
})

// 调用服务器的监听方法
server.listen(port, (error) => {
    console.log(error)
    console.log('WebServer is start')
})