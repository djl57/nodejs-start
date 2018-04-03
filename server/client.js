// client.js虽然称为客户端，但是跟前端是两回事
// nodejs内部又分客户端和服务端，nodejs可以被别人调用，这时候就称nodejs
// 为服务端，nodejs也有别的需要，nodejs的底层服务是在别的服务器上搭建的，
// nodejs需要去调用其它的服务，这时候就称它为客户端

// nodejs模拟调用其它服务

// 我们可以模拟第三方网站的登录等，使用http的get和post方法，不会就自己查文档
// 我们来调用慕课网上的接口： https://www.imooc.com/index/getstarlist

var http = require('http')
let util = require('util')

// 通过http.get方式来调用接口
http.get('http://www.imooc.com/index/getstarlist', (res) => {
  let data = ''
  // res.on来接收数据的变化,通过数据累加来监听所有数据
  res.on('data', (chunk) => {
    data += chunk
  })
  // end的时候数据接收完，接收完之后我们需要把数据进行打印
  res.on('end', () => {
    // deta接收之后是一个字符串，我们需要把它转换成一个json对象来返到我们的前端，
    // 来给前端进行调用
    let result = JSON.parse(data)
    // 用util来对我们的输出结果进行调试
    // util.inspect(result)
    // 因为我们这里没有前端，所以我们直接把它进行打印
    console.log('result:' + util.inspect(result))
  })
})
// nodejs模拟调用其它服务结束
