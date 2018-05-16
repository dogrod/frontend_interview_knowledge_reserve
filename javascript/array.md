# Array

- Q: `Array` 有哪些常用的函数，分别有什么作用，如何使用？

  A:

  - Array对象上的方法（静态函数）
    - **Array.from(arrayLike[, mapFn[, thisArg]])** 方法从一个类似数组或可迭代对象中创建一个新的数组实例。
    - **Array.isArray(obj)** 用于确定传递的值是否是一个 Array。

  - Array实例上的方法（Array.prototype上的方法）
    - 转换方法
      - **Array.prototype.toLocaleString()**
      - **Array.prototype.toString()**
    - 改变数组长度的方法
      - **Array.prototype.push(element1, ..., elementN)** 方法将一个或多个元素添加到数组的末尾，并返回新数组的长度。
      - **Array.prototype.pop()** 方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。
      - **Array.prototype.shift()** 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。
      - **Array.prototype.unshift(element1, ..., elementN)** 方法将一个或多个元素添加到数组的开头，并返回新数组的长度。
    - 对数组重新排序的方法
      - **Array.prototype.reverse** 方法将数组中元素的位置颠倒。
      - **Array.prototype.sort(compareFunction(a, b))** 方法用就地（ in-place ）的算法对数组的元素进行排序，并返回数组。 sort 排序不一定是稳定的。默认排序顺序是根据字符串Unicode码点。 如果返回值为**正数**，参数2 会被排列到参数1 之前，否则参数2 排列在参数1 之后。
    - 对数组进行操作的方法
      - **Array.prototype.concat(value1[, value2[, ...[, valueN]]])** 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
      - **Array.prototype.slice([start[, end]])** 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改。
      - **Array.prototype.splice(start[, deleteCount[, item1[, item2[, ...]]]])** 方法通过删除现有元素和/或添加新元素来更改一个数组的内容。
    - 获取位置的方法
      - **Array.prototype.indexOf**
      - **Array.prototype.lastIndexOf**
    - 迭代方法
      - **Array.prototype.filter**
      - **Array.prototype.forEach**
      - **Array.prototype.map**
    - 归并方法
      - **Array.prototype.reduce(callback[, initialValue])** 方法对累加器和数组中的每个元素（从左到右）应用一个函数，将其减少为单个值。
      - **Array.prototype.reduceRight**
    - **Array.prototype.join**
    - **Array.prototype.includes**
    - **Array.prototype.find**
    - **Array.prototype.fill**

  扩展：不常用函数
  - 静态函数
    - **Array.of(element0[, element1[, ...[, elementN]]])** 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。
  - 原型链方法
    - 迭代方法
      - **Array.prototype.every**
      - **Array.prototype.some**
    - **Array.prototype.keys**
    - **Array.prototype.values**
    - **Array.prototype.entries**
    - **Array.prototype.copyWithin**

  > 参考：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)

- Q: 多层嵌套Array如何完整访问（大搜车）

  A:

- Q: 实现数组去重。（腾讯）

  A:

- Q: 移除数组第一个元素的方法有哪些？（网易）

  A:

- Q: `Array` 的 `sort` 方法是如何实现的？（网易）

  A:

  原理：用就地（ in-place ）的算法对数组的元素进行排序，并返回数组。

- Q: 设计一个函数，能够删除数组中的指定内容，要有良好的扩展性。（网易）

  A:

- Q: 列举数组的用法。（腾讯）

  A:

- Q: 完成一个'flatten'的函数，实现“拍平”一个多维数组为一维。示例如下：
  ```
    var testArr1 = [[0, 1], [2, 3], [4, 5]];
    var testArr2 = [0, [1, [2, [3, [4, [5]]]]]];
    flatten(testArr1) // [0, 1, 2, 3, 4, 5]
    flatten(testArr2) // [0, 1, 2, 3, 4, 5]
  ```

  A:

  ```
  // flatten array
  const flatten = (array: any[]) => {
    return array.reduce((pre, value) => {
      return pre.concat(Array.isArray(value) ? flatten(value) : value)
    }, [])
  }
  ```
  使用 `reduce` 归并数组，设置初始值为 `[]`，如果子项目不为数组则使用 `concat` 并入新数组，如果子项目为数组，则调用 `flatten` 继续递归操作，直至找到不为数组的子项目。