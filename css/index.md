# CSS

- Q: 使元素消失（不可见）的方法有哪些？都有什么区别（网易）

  A:
  1. `display: none` **改变页面布局**，不会触发该元素已绑定的事件
  2. `opacity: 0` 不改变页面布局，**会触发该元素已绑定的事件**
  3. `visibility: hidden` 不改变页面布局，不会触发该元素已绑定的事件

- Q: 两个嵌套的 div ，position 都是 absolute，子 div 设置 top 属性，那么这个 top 是相对于父元素的哪个位置定位的？（网易）

  A: 相对于父元素的上边界。

- Q: `position` 的属性有哪些？默认值是什么？

  A: CSS 中 `position` 可设置的值有 `static`, `relative`, `absolute`, `fixed`, `sticky`，默认值为 `static`

  > 参考 [position - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

- Q: 什么是盒模型？`box-sizing` 有哪些属性？分别如何计算？要使盒子表现与IE一致该如何？（网易）

  A:
  - 在一个文档中，每个元素都被表示为一个矩形的盒子。在CSS中，使用标准盒模型描述这些矩形盒子中的每一个。这个模型描述了元素所占空间的内容。每个盒子有四个边：外边距边(Margin Edge), 边框边(Border Edge), 内填充边(Padding Edge)与内容边(Content Edge)。

  ![盒模型](/assets/boxmodel.png)

  - `box-sizing` 属性有2个可设置的值，`content-box` 和 `border-box`。

    - `content-box` 默认值。元素的内容区域(content)的宽度即为设置的 `width` ，其他任何的边框(border)和内边距(padding)的宽度都会被增加到最后绘制出来的元素的宽度中。

    - `border-box` 边框(border)和内边距(padding)的宽度包含在 `width` 内，即最后绘制出来的元素的宽度等同于设置的 `width`

  - W3C 盒模型和 IE 盒模型（默认值表现等同于 `box-sizing: border-box`）的差异仅发生在怪异模式下，只需设置 `<!DOCTYPE html>` 将页面设置为标准模式即可解决

- Q: 如何实现左定宽右自适应撑满的布局？等高。（网易、头条）

  A:

- Q: 什么是 BFC ？

  A:

- Q: 实现垂直居中有哪些方法？如何实现水平居中？

  A:

  垂直居中：
  1. flex 布局
    ```css
    .parent {
      display: flex;
      align-items: center;
    }

    // 或者子元素使用 align-self 属性
    .parent {
      display: flex;
    }

    .children {
      align-self: center;
    }
    ```
  2. 子元素相对父元素绝对定位并设置偏移
    ```css
    .parent {
      position: relative;
    }

    .children {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    ```

    水平居中：
    1. inline element: `text-align: center;`
    2. 定宽 block element: `margin: auto;`
    3. 子元素相对父元素绝对定位并设置偏移
      ```css
      .parent {
        position: relative;
      }

      .children {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      ```
    4. flex 布局
      ```css
      .parent {
        display: flex;
        justify-content: center;
      }
      ```

- Q: 如何清除浮动？

  A:

- Q: `reset.css` 的作用？

  A: 解决 CSS 默认样式不兼容的问题，使得 CSS 样式在不同的浏览器中表现一致。

- Q: normalize.css的应用（对比reset）？

  A:

  1. normalize.css 会设置一个默认样式而不是不提供任何样式。
  2. normalize.css 的作用范围更广。
  3. normalize.css 不会使 dev tool 看起来很乱（reset.css 含有大量的 inherit）。
  4. normalize.css 更加模块化。
  5. normalize.css 文档更好。

  > 参考 [What is the difference between Normalize.css and Reset CSS?
](https://stackoverflow.com/questions/6887336/what-is-the-difference-between-normalize-css-and-reset-css)

- Q: 选择器的权重怎么理解？

  A: 行内样式 > id > 属性选择器/class/伪类 > 元素名/伪元素
  权重计算方式：
  - 行内样式 1000
  - id 100
  - 属性选择器/class/伪类 10
  - 元素名/伪元素 1

  > 参考 [你应该知道的一些事情——CSS权重](https://www.w3cplus.com/css/css-specificity-things-you-should-know.html)

  **扩展**：

  一个 CSS  伪类（pseudo-class） 是一个以冒号(:)作为前缀的关键字，当你希望样式在特定状态下才被呈现到指定的元素时，你可以往元素的选择器后面加上对应的伪类（pseudo-class）。

  伪元素（Pseudo-element）是一个以两个冒号 (::)作为前缀关键字 —— 同样是添加到选择器后面达到指定某个元素的某个部分。

- Q: 用 Less（Sass）如何给某些属性加浏览器前缀？（网易）

  A: 如只需处理特定的浏览器前缀，可以使用 mixin（不推荐）。如果需要设置全局的浏览器前缀，可以使用 `Autoprefixe` 来处理浏览器前缀。

  > 相关：PostCSS 和 webpack autoprefixer 插件

- Q: `flex` 布局有哪些用法？有哪些属性？（网易/才云）

  A:

- Q: CSS 的单行和多行截断？（头条）

  A:

- Q: CSS 如何实现持续的动画？（才云）

  A:

- Q: CSS如何控制旋转？（才云）

  A:

- Q: 三栏等宽等间距布局如何实现？（才云）

  A: