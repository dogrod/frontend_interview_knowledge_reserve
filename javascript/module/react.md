# React

- Q: 为什么要选择react，react有哪些好处？（网易）

  A:
  1. 更加偏向原生 JavaScript 的开发方式
  2. 对第三方 package 的兼容性更友好（原因在 1）
  3. 更好的生态，更加活跃的社区
  4. 具有更好的多平台兼容性，更加成熟的解决方案，对比 Weex 同 3

- Q: 为什么 react 不推荐使用 index 做为 key，什么情况下又可以使用 index 做 key（阿里国际UED）

  A:
  `key` 是 React 用来识别 DOM 元素（V-DOM）的唯一标志，而 `index` 则是一个可变动性很强的属性，一旦进行 `push` 或其他能够改变子元素 `index` 的操作，React 可能会进行错误的判断，导致错误的数据被显示。

  可以使用 `index` 作为 `key` 的条件（需全部满足）：
  1. 静态的 list（确保不会进行任何变化的，例如客户端的 terms）
  2. 没有稳定的具有唯一性的属性（如 id）
  3. 确保不会发生重新排序或者筛选

  > 参考：
  >
  > [Index as a key is an anti-pattern](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318)

- Q: React 16的主要变化有哪些？

  A:

  1. 引入 `Fiber Reconciler`，`render` 函数可以返回数组、字符串、数字。
  2. `componentDidCatch` 生命钩子，错误边界，可以达到更好的错误处理。
  3. 废弃 `compoentWillXxx` 生命钩子，使用 `getDerivedStateFromProps` 代替 `componentWillReceiveProps` 。
  4. 新增 `<StrictMode/>` 组件，严格模式下运行的组件不会调用被废弃的生命钩子。
  5. `React.ceatePortal(child, container)` ，传送门，可以将子组件直接渲染到当前容器组件 DOM 结构之外的任意 DOM 节点中，使得开发对话框、浮层，提示信息等需要打破当前 DOM 结构的组件更加方便。
  6. `<Fragment/>` or `<></>` 组件，相当于返回一个数组。
  7. SSR 由 `renderToString` 改为 `renderToNodeStream` ，提升传输时间和空间效率。
  8. `Time Slicing` & `Suspense`
  - `Time Slicing` 异步渲染，不阻塞当前线程
  - `Suspense` 之前在 `render` 函数中无法异步获取数据，会自动进入下一个 `event loop`，有了 `suspense` 之后，render 的过程变为：调用render函数->发现有异步请求->悬停(suspense)，等待异步请求结果->再渲染展示数据。相当于一个 `async/await` 函数。

  > 参考：
  >
  > [如何评价React v16.0?](https://www.zhihu.com/question/65920482)
  >
  > [React16新特征总览](https://zhuanlan.zhihu.com/p/34604934)
  >
  > [如何评价React的新功能Time Slice 和Suspense？](https://www.zhihu.com/question/268028123)

- Q:如何访问（获取）真实的DOM？（网易）

  A:
  1. 通过 `refs` API - 分为字符串形式访问（不推荐），回调赋值方式
  2. In React 16.3+，在 `constructor` 中调用 `React.createRef()` 方法创建 `ref` 对象，并通过 `<div ref={this.myRef} />` 进行赋值。通过 `this.myRef.current` 访问当前元素。

- Q: React `diff` 算法的原理是什么？（网易）

  A:

  传统 `diff` 算法：循环递归遍历节点进行对比，复杂度O(n^3)

  React `diff` 策略：复杂度O(n)
  1. Web UI 中 DOM 节点跨层级的移动操作特别少，可以忽略不计。
  2. 拥有相同类的两个组件将会生成相似的树形结构，拥有不同类的两个组件将会生成不同的树形结构。
  3. 对于同一层级的一组子节点，它们可以通过唯一 id 进行区分。

  具体实现：
  - `tree diff` 对树进行分层比较，两棵树只会对同一层级的节点进行比较，即同一个父节点下的所有子节点。当发现节点已经不存在时，则该节点及其子节点会被完全删除掉，不会用于进一步的比较。
  - `component diff` 如果是同一类型的组件，按照原策略继续比较 Virtual DOM 即可。如果不是，则将该组建判断为 dirty component ，从而替换**整个组件下的所有子节点**。
  - `element diff` 传统的 diff 如果发生位置变化，会删除所有的节点重新创建节点。React 通过设置唯一的 key (id) 减少繁杂低效的删除、创建操作。

  > 参考：
  >
  > [React 源码剖析系列 － 不可思议的 react diff](https://zhuanlan.zhihu.com/p/20346379)
  >
  > 《深入 React 技术栈》 - 陈屹 P172

- Q: 介绍下 `Virtual DOM` ？（网易）

  A:
  `Virtual DOM` 是一个结构类似 DOM 树的包含 DOM 节点属性的 JavaScript 对象。由于直接操作 DOM 非常慢，而频繁操作 DOM 元素则有可能引起性能问题。`Virtual DOM` 引入了 `batching` 和 `diff` 算法，只对真正需要变化的 DOM 元素进行操作。

  然而实际情况中，`Virtual DOM` 的 `diff` 算法有的时候会出现不准确的情况，所以 React 引入了 `shouldComponentUpdate` 生命钩子，用来更新视图。

  `Virtual DOM` 的优点：
  - 保证最小化的DOM操作，使得执行效率得到保证
  - 使用 JavaScript 声明式描述 html，提升可维护性
  - 可复用 DOM 结构，实现组件的高度抽象化
  - 可以更好的实现 SSR，同构渲染等
  - 框架跨平台

  > 扩展：
  >
  > React 从来没有说过 “React 比原生操作 DOM 快”。React给我们的保证是，在不需要手动优化的情况下，它依然可以给我们提供过得去的性能。
  >
  > 没有任何框架可以比纯手动的优化 DOM 操作更快，因为框架的 DOM 操作层需要应对任何上层 API 可能产生的操作，它的实现必须是普适的。针对任何一个 benchmark，我都可以写出比任何框架更快的手动优化，但是那有什么意义呢？在构建一个实际应用的时候，你难道为每一个地方都去做手动优化吗？出于可维护性的考虑，这显然不可能。
  >
  > 参考：
  >
  > [如何理解虚拟DOM?](https://www.zhihu.com/question/29504639)
  >
  > [React虚拟DOM浅析](http://www.alloyteam.com/2015/10/react-virtual-analysis-of-the-dom/)