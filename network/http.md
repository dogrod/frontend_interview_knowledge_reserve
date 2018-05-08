# HTTP

- Q: HTTP协议中有哪些常用的请求方式

  A:
  - GET (SELECT): 只用于获取数据，从服务器去除资源
  - POST (CREATE): 通常导致状态更改、新建资源，将制定实体提交到指定资源。原则上只用于CREATE，但是由于早期MVC项目只实现了GET和POST，所以POST在很多业务场景中也用于UPDATE和DELETE
  - PATCH (UPDATE): 对资源应用更改，不返回完整资源
  - PUT (UPDATE): 对资源应用更改，返回目标的完整资源
  - DELETE (DELETE): 删除资源

- Q: GET和POST有什么区别

  A:
  1. 根据HTTP规范，GET用于信息获取，POST表示可能修改变服务器上的资源的请求。也就是说，GET请求一般不应产生副作用，不会修改、增加数据，不影响资源状态。POST则可能会修改服务器上的资源
  2. GET请求直接在URL中加入请求内容数据，而POST时需要用到FORM表单
  3. GET只允许 ASCII 字符。POST没有限制。也允许二进制数据
  4. GET和POST本质上都是TCP链接。GET请求中浏览器会把header和body一并发出去，产生一个TCP数据包。而POST请求中浏览器会先发送header，当服务器响应100 continue后浏览器才会发送body（data），所以会产生两个TCP数据包
  5. 编码协议不同，GET的编码类型为application/x-www-form-url，POST请求的编码类型为encodedapplication/x-www-form-urlencoded 或 multipart/form-data
  6. GET和POST从协议上都对请求长度没有限制，但是GET请求依赖于URL来提交数据，而有些浏览器对于URL长度有限制，如IE限制为2083字节（2K+35），其他浏览器取决于操作系统的不同，理论上不存在限制
  7. GET请求是明文URL，会保留在浏览器历史中，而且使用GET提交数据比较容易遭到CSRF（Cross-site request forgery）攻击，所以有POST比GET安全一说

- Q: HTTP中有哪些状态码，分别代表着什么

  A:
  - 1xx: 保留 -> 消息（临时），常见100 Continue(常见于POST请求)
  - 2xx: 成功接受请求 -> 成功，常见200 OK, 201 Created(资源已被创建), 202 Accepted(已接受请求尚未处理)
  - 3xx: 需进一步细化请求 -> 重定向，常见301 Move Permanently(被请求的资源已永久移动到新位置，如HTTP迁移至HTTPS的响应方法)、302 Found(要求客户端执行临时重定向)
  - 4xx: 客户端错误，常见400 Bad Request(由于明显的客户端错误), 401 Unauthorized, 403 Forbidden(服务器已经理解请求，但是拒绝执行它，例如资源被禁止访问), 404 Not Found
  - 5xx: 服务端错误，常见500 Internal Server Error, 501 Not Implemented(服务器不支持当前请求所需要的某个功能), 502 Bad Gateway(作为网关或者代理工作的服务器尝试执行请求时，从上游服务器接收到无效的响应)

- Q: 状态码 `304` 是什么意思，在什么情况下应该使用 `304`？（网易）

  A:

- Q: `301` 和 `302` 有什么区别？

  A:

- Q: `cache-control` 里面的 `private` 和 `public` 分别有什么作用？（网易）

  A:

- Q: `Cookie` 和 `Session` 的区别？（网易）

  A:

- Q: `Cookie` 有哪些可以设置的属性？（网易）

  A:

- Q: `Cookie` 有哪些编码方式？（网易）

  A:

- Q: `Session` 的实现原理？（网易）

  A: