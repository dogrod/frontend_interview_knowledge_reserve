# Object

- Q: 给两个构造函数 A 和 B ，如何实现 A 继承 B ？（网易）

  A:

  ```javascript
    // 提供的构造函数
    function A(...args) {}
    A.prototype...

    function B(...args) {}
    B.prototype...

    // 原型链继承
    A.prototype = Object.create(B.prototype)

    // 构造函数继承
    A.prototype.constructor = B
  ```

  扩展：

  ```javascript
  // Object.create 原理
  Object.create = function (o) {
    var f = function () {}
    f.prototype = o
    return new f()
  }
  ```

- Q: 多级 Object/Array 如何安全访问？

  A:

  1. `obj.user && obj.user.address && obj.user.address.street`
  2. 在函数表达式外部使用判断代码块
  3. 递归查找方法，使用 `...args` 扩展参数。

  相关：optional chaining

  - Current stage: stage 1
  - Semantics: 
    - `a?.b` // undefined if `a` is null/undefined, `a.b` otherwise.
    - `a?.b()` // undefined if `a` is null/undefined, throws a TypeError if `a.b` is not a function. Otherwise, evaluates to `a.b()`
  - 使用方法：
    1. optional 静态属性名访问 `obj.user?.address?.street`
    2. optional 动态属性名访问 `obj.user?.address?.street?.[street]`
    3. optional 方法/函数调用 `obj.user?.address?.getStreet?.(...args)`

- Q: 如何实现深度拷贝？

  A:

- Q: `call`、 `apply`、 `bind` 有什么区别

  A:
  - `fun.call(thisArg, arg1, arg2, ...)` 方法调用一个函数, 其具有一个指定的this值和分别地提供的参数(参数的列表)。
  - `func.apply(thisArg, [argsArray])` 方法调用一个函数, 其具有一个指定的this值，以及作为一个数组（或类似数组的对象）提供的参数。
  - `fun.bind(thisArg[, arg1[, arg2[, ...]]])` 方法创建一个新的函数, 当被调用时，将其this关键字设置为提供的值，在调用新函数时，在任何提供之前提供一个给定的参数序列。

## Prototype

- Q: 什么是原型链（Prototype）？

  A:

  ![prototype](/assets/prototype.jpg)
  ![prototype2](/assets/prototype2.png)

  - 每一个构造函数都具有 `prototype` 属性，即原型
  - 该构造函数的创建的实例具有 `__proto__` 属性（隐式原型），指向构造函数的 `prototype`
  - 当试图访问一个对象的某个属性时，如果不存在，则会顺着 `__proto__` 向上查找
  - 可以通过 `hasOwnProperty` 判断是否实例/函数本身的属性
  - 可以使用 `f instanceof F` 判断 f 是否为 F 的实例

- Q: JavaScript 中有哪些继承的方式？

  A:

- this 的指向问题

- Q: 简述 getter 和 setter 写法。（头条）

  A:

- Q: 解释构造函数、对象、原型链之间的关系。（网易）

  A:

## Promise

- Q: Promise 有哪些状态？（有赞）

  A:

  - pending 异步操作未成功
  - resolved (fulfilled) 异步操作成功
  - rejected 异步操作失败

- Q: Promise 有哪些方法？（有赞）

  A:

  - 静态方法
    - `Promise.resolve(value)` 返回一个以给定值（value）解析的 Promise 对象
    - `Promise.reject(reason)` 返回一个用 reason 拒绝的 Promise。扩展：thenable
    - `Promise.all(iterable)` 接受一个 promise 数组，待所有任务都完成后返回一个数组。如果有一个任务失败，即返回失败，原因是第一个失败的任务的失败原因。
    - `Promise.race(iterable)` 接收一个 promise 数组，待第一个解析成功或失败后，返回第一个 promise 操作的结果
  - 实例（原型链）方法
    - `Promise.prototype.then(onFulfilled, onRejected)` 返回一个 Promise，最多接受两个参数，第一个是成功时的回调参数，第二个是失败时的回调参数
    - `Promise.prototype.catch(onRejected)` 返回一个 Promise，并处理拒绝的情况。实际行为与 Promise.prototype.then(undefined, onRejected) 相同
    - `Promise.prototype.finally(onFinally)` 返回一个 Promise，在执行 then() 和 catch() 方法后都会执行 finally 中指定的回调函数。避免需要在 then() 和 catch() 中各写一次。

    > 参考：
    >
    > [Promise 对象](https://javascript.ruanyifeng.com/advanced/promise.html#toc2)
    >
    > [Promise - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)