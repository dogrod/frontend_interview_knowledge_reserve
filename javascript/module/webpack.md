# Webpack

- Q: 什么是 `webpack` ？`webpack` 和 `gulp` 有什么区别？

  A:
  初期的 `webpack` 更多的是模块化解决方案，而 `gulp` 主要是对工程进行后处理的工具。而随着 `webpack` 的发展，很多 `gulp` 具有的功能 `webpack` 也都有了。

- Q: `webpack` 能干些什么？有哪些常用的应用场景？

  A:

- Q: `webpack` 编译出的文件体积过大怎么解决？（阿里）

  A:
  - `UglifyJS`
  - `Code Split`
  - `extract-text-webpack-plugin` 拆分 import 到 js 文件中的 css 文件
  - 提取公共代码
  - 使用 `vendor` 抽离 `react` 等模块
  - 使用 `dll`

- Q: `webpack` 是如何做到支持多种模块的写法的？（网易）

  A: