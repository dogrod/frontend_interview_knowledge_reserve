# JavaScript

- Q: JavaScript 中有哪些数据类型？

  A:
  最新的 ECMAScript 标准定义了 7 种数据类型:
  - 6种**原始类型**
    - Boolean
    - Null
    - Undefined
    - Number
    - String
    - Symbol(ECMAScript 6中新定义)
  - **Object**

  > 参考：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)

- Q: 什么是 `event loop` ？（阿里国际UED）

  A:

- Q: AJAX原理，手动实现一个简单的HTTP请求方法

  A:

  > 相关：fetch

- Q: 如何解析 JSON ？

  A:

- Q: 闭包是什么，举个例子？

  A:

  - 闭包是函数和声明该函数的词法环境的组合。
  - 一般情况下为了能够从外部访问这个非自由变量会 return 调用这个变量的函数
  - 在外部访问这个变量的过程中，这个变量会常住在内存中

  例子：

  ```javascript
  function a () {
    var b = 1
    setTimeout(function () {
      b++
    }, 1000)
  }
  ```

  > 参考：
  >
  > [「每日一题」JS 中的闭包是什么？](https://zhuanlan.zhihu.com/p/22486908)

- Q: 什么是立即执行函数？有哪些使用场景？

  A:

- Q: JavaScript 异步模式如何实现？（网易）

  A:

- Q: `CommonJS`， `AMD` 和 `es module` 的模块系统有什么不同？（阿里）

  A:

- Q: 假如有函数 A, B, C，同时需要获取用户信息，当 A 需要获取用户信息时，之前并没有进行获取，则需要向服务器请求数据，而在数据返回前，B 只能等候 A 的数据返回，并在返回后同时返回给 A 和 B 。设计一个 API 实现获取用户信息的方法。（网易）

  A:

- Q: jQuery 链式调用的原理。（网易）

  A: