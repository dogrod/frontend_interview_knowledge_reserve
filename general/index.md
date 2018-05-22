# General

- Q: 遇到问题如何处理？举一个印象深刻的 bug ？

  A:

- Q: 如何学的前端？(网易)

  A:

- Q: IE兼容问题、IE6有哪些常见的兼容性问题？

  A:

- Q: SPA 的定义，有哪些优缺点？

  A:

- Q: 什么是 PWA ？

  A:

- Q: 什么是 WebAssembly ？

  A:

- Q: 什么是前后端分离？为什么要前后端分离？有哪些优缺点？

  A:

- Q: 从输入 URL 到页面展现中间发生了什么？
    or 简述一下用户访问网站的过程。（腾讯）

  A:

- Q: 前端部署有哪些缓存等方案？（阿里国际UED）

  A:

  - 部署
    - webpack打包使用nginx提供服务
    - nodejs提供前端页面
    - freemarker
  - 缓存
    - 通过HTTP的meta设置expires和cache-control
    - 通过web服务器对静态文件设置缓存
    - 通过后端服务设置缓存
  - 更新缓存
    - 设置版本号，hash
  - HTTP状态码
    - 200 from memory cache 不访问服务器从内存中读取，kill进程后数据不存在，只能缓存派生资源
    - 200 from disk cache 不访问服务器从硬盘中读取，kill进程后依然存在，只能缓存派生资源
    - 304 not modified 访问服务器发现数据没有更新，返回304，在缓存中查找
  - 缓存的几个参数
    - cache-control: cache-directive
      - Public  指示响应可被任何缓存区缓存。
      - Private  指示对于单个用户的整个或部分响应消息，不能被共享缓存处理。这允许服务器仅仅描述当用户的部分响应消息，此响应消息对于其他用户的请求无效。
      - no-cache  指示请求或响应消息不能缓存（HTTP/1.0用 Pragma 的 no-cache 替换）
      - max-age 指示客户机可以接收生存期不大于指定时间（以秒为单位）的响应。
      - expires 表示存在时间，允许客户端在这个时间之前不去检查（发请求），等同max-age的效果。但是如果同时存在，则被 Cache-Control 的 max-age 覆盖。
  - last-modified 返回后请求头添加 if-modified-since
  - etag 双引号包起来的tag，返回后请求对应If-None-Match
  - pragma 一般用到no-cache
  - 一般结合 cache-control 和 etag ，同时兼容旧版本使用 pragma 和 max-age/ expires

- Q: 做过哪些项目？承担的角色是什么？有什么技术亮点？（阿里国际UED）

  A:

- Q: 页面性能优化有哪些常见的方法？（阿里国际UED） or 系统优化有哪些方法？简述一下 CDN 加速服务？（腾讯）

  A:

  - 合并请求
  - CDN 加速静态文件
  - 开启 gzip，压缩文件
  - minify 代码
  - 按需加载资源，异步加载
  - 缓存静态文件
  - 同构，服务器直出
  - service worker+流
  - 避免css JavaScript文件阻塞渲染
  - JavaScript 语法
    - 多次调用提前缓存变量，例子 for( var i=0; i<arr.length; i++ ){
    合并变量声明
    - 避免使用全局变量，使用let 和const
    - 如果函数仅使用一次，可以使用 IIFE

    **CDN**
    在不同的地点的服务器缓存内容，通过负载均衡，将用户的请求指向最优的服务器。

- Q: 谈谈你印象最深的一个项目。（腾讯）

  A:

- Q: 你觉得要怎样成为一名优秀的前端工程师？（腾讯）

  A:

- Q: App 中有哪些与原生交互的实现方式？（有赞）

  A:

  - 原生拦截 WebView 中的 URL 跳转 - 存在很多判断，不适合大项目
  - 利用 JSContext 注入 JavaScript 函数
  - 使用 JSBridge 交互 - 原生不支持，需要安装第三方包

- Q: App 中如何提升加载 h5 的体验？（有赞）

  A:

  - 使用HTTP协议进行缓存
  - 使用cache manifest进行缓存 - HTML5特性
