// module.exports 和 exports方法的区别：
// https://blog.csdn.net/cike110120/article/details/12753253

module.exports = {
  userName: 'Jack',
  sayHello: () => {
    return 'hello'
  }
}

exports.userName = 'tom'
exports.sayHello = () => {
  return 'hello world'
}
