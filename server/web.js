// 创建一个web容器，去访问到html页面

let http = require('http')
let url = require('url')
// let util = require('util')

let fs = require('fs') // 通过fs去读我们的文件系统

let server = http.createServer((req, res) => {
  //   res.statusCode = 200
  //   res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  var pathname = url.parse(req.url).pathname // 拿到文件
  console.log(pathname) // pathname为/
  // 读取一个文件(数据)
  fs.readFile(pathname.substring(1), (err, data) => {
    if (err) {
      res.writeHead(404, {
        'Content-Type': 'text/html'
      })
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      })
      res.write(data.toString())
    }
    res.end() // 需要在文件系统内部结束
  })
})

server.listen(3000, '127.0.0.1', () => {
  console.log('服务器已经运行，请打开 http://127.0.0.1:3000 进行访问')
})

// 创建一个web容器成功

// 如何通过http模块去模拟我们调用第三方的接口
