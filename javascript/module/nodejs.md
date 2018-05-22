# Node.js

- Q: Node.js可以用来干什么，常见的业务场景有哪些？

  A:
  1. 纯后端，连接数据库提供API
  2. 做BFF层，提供数据处理以及转发
  3. 渲染前端页面

- Q: Node.js event loop是怎样的？

  A:
  1. Timers - `setTimeout`, `setInterval`
  2. I/O callback - 上一轮延迟的部分 I/O callback
  3. Idle/ Prepare - 内部调用 `idle`, `prepare`
  4. Polling - I/O callback
  5. Check - `setImmediately`
  6. Close callback - Close Event

- Q: Node.js 有什么优缺点？（网易）

  A:

  优点：
  1. 非阻塞异步 I/O ，有效处理高并发
  2. 事件驱动

  缺点：
  1. 不支持热重载，需要手动重启服务
  2. 历史短，高速发展，易变动，大型项目解决方案不成熟

- Q: 如果使用原生 Node.js 搭建一个简单的 Web Server？（才云）

  A:

  ```javascript
  const http = require('http')
  const app = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" })
    response.write(`Hello World`)
    response.end()
  })

  app.listen(3000)
  ```

- Q: 使用 Node.js 如何计算从接收请求到响应请求中间的时间？（才云）

  A:
  使用 Koa 作为服务框架：

  使用中间件计算时间

  ```javascript
  const responseTime = async (ctx, next) => {
    const startTime = Date.now()
    await next()

    const elapsed = Date.now() - startTime
    ctx.set('X-Response-Timing', elapsed)
  }
  ```
