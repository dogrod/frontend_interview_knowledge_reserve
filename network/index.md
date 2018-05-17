# Network

- [http](/network_protocol/index)

- Q: 跨域请求有哪些方法？JSONP是什么？CORS是什么？`postMessage` 是什么？（腾讯）

  A:

  跨域请求:
  1. CORS，在标准的 XHR 对象的 `open()` 方法中传入绝对URL
  2. 后端 Response Headers 中 `Access-Control-Allow-Origin` 支持，Request Headers 中添加 `Origin` 字段。
  3. 图像Ping，无法获取响应文本，仅用于简单的单向通信，例如追踪点击量
  4. JSONP（JSON with padding）：通过插入带 src 的 `script` 标签，获取一个包含 JSON 参数的 callback
  <!-- TODO: 补充跨域知识 -->
  5. postMessage
  6. document.domain 降域

  JSONP:
  1. 创建 `script` 标签：`var script = document.createElement('script')`
  2. 获取请求URL，拼接回调参数：`var url = 'http://localhost:8888/test?id=1&callback=jsonpCallback'`
  3. 将 URL 写入 `script` 标签，并将 `script` 添加到页面

  ```javascript
    script.setAttribute('src', url)
    var body = document.getElementByTagName('body')[0]
    body.appendChild(script)
  ```

  4. 添加全局回调函数，并移除临时标签：`function jsonpCallback () { body.removeChild(script) ...}`

- Q: 如何理解 `RESTful API` ？

  A:

- Q: 什么是 `GraphQL` ？相比 `RESTful` 有什么优势？目前实践上有什么难点？

  A:

- Q: HTTP ， TCP ， UDP ， IP 分别是什么？（腾讯）

  A:

- Q: 进程通信，有名和匿名管道。（腾讯）

  A:

- Q: TCP 三次握手和四次挥手，拥塞控制。（头条）

  A: