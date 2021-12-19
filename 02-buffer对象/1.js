let buf1 = Buffer.from([ 97, 98, 99 ])
console.log(buf1) // <Buffer 61 62 63> 转换成二进制存放
console.log(buf1.toString()) // abc // 通过toString解析buffer中的数据

let buf2 = Buffer.from('nodejs')
console.log(buf2) // <Buffer 6e 6f 64 65 6a 73>
console.log(buf2.toString()) // nodejs

// let buf3 = Buffer.from([ 'a' ]) // 只接收number数组或字符串
// console.log(buf3)
// console.log(buf3.toString())

let buf4 = Buffer.alloc(10) // 创建一个可以存放10个字符的buffer
buf4.write('node') // node 这种方式只接收字符串
buf4.write('jsdawdawdadw') // jsde 重新white会将之前位置的字符覆盖
buf4.write('dhioawhfdoiahdwo') // 超出的部分会被截掉
console.log(buf4.toString())