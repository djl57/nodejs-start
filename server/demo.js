const user = require('./user')

console.log(`i am :${user.userName}`)

console.log(`i am :${user.userName}, i say ${user.sayHello()}`)

// 创建服务器
// 以下是经常会用到的模块
let http = require('http')
let url = require('url') // url模块就是用来解析我们的请求头（即请求的地址）
let util = require('util')

let server = http.createServer((req, res) => {
//   const statusCode = res.statusCode
// 等于 const { statusCode } = res.statusCode

  res.statusCode = 200 // 模拟一个状态码

  res.setHeader('Content-Type', 'text/plain; charset=utf-8') // 响应头

  // url.parse(req.url)// 打印一下请求头里的数据

  // util.inspect(url.parse(req.url)) // 一种调试模式,我们通过inspect可以把一个对象转换成字符串进行输出

  console.log('url:' + req.url)
  console.log('parse:' + url.parse(req.url)) // [Object]
  console.log('inspect:' + util.inspect(url.parse(req.url))) // 把Object展开
  res.end(util.inspect(url.parse(req.url)))

  // res.end(url.parse(req.url)) // 直接把url输出

  // res.end('Hello,Node.js') // 结束发送请求，具体看文档
})

// 可从文档知道listen属于http.server类，所以在createServer之后可以调用
server.listen(3000, '127.0.0.1', () => {
  console.log('服务器已经运行，请打开浏览器，输入：http://127.0.0.1:3000/ 来进行访问')
})

// 创建服务器完成

// 创建一个web容器，去访问到html页面
// 看web.js
