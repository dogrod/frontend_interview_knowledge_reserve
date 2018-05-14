# Object

- Q: 给两个构造函数 A 和 B ，如何实现 A 继承 B ？（网易）

  A:

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

- Q: JavaScript 中有哪些继承的方式？

  A:

- this 的指向问题

- Q: 简述 getter 和 setter 写法。（头条）

  A:

- Q: 解释构造函数、对象、原型链之间的关系。（网易）

  A: