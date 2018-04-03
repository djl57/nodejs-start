node.js 文档： http://nodejs.cn/api/


module.exports 和 exports方法的区别：https://blog.csdn.net/cike110120/article/details/12753253


查文档时会出现net-(网络),http的各种类和net的各种类的用法否类似，查http时查到net可以回去http再看


url分两种api，所看视频用的是遗留的url api

Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?a=123',
  query: 'a=123',
  pathname: '/demo.html',
  path: '/demo.html?a=123',
  href: '/demo.html?a=123' }

解析的url是没有hash前面的内容的，即nodejs没有办法获取到完整的url，
express框架是可以拿到完整的url的（它有一个req.originalUrl,可以拿到完整的url）

阅读顺序：demo.js -> web.js -> client.js