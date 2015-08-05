# SlideJS

Demo [at Codepen](http://codepen.io/atelierbram/pen/YXBKBg/)

Slider made with object-oriented methods, using native (_vanilla_) javascript

To be placed into the initiation code, and then passed to the relevant configuration objects, you can pass parameters are:

- target `{string}` surrounded by images of the div id, the default slide
- showMarker `{boolean}` whether to display the current image tag value, default false
- marker `{boolean}` tag is `ol li`, default false
- showController `{boolean}` about whether to display control marks, default false
- setClass `{object}`
  - marker `{string}` mark CSS classes, separated by a space between a plurality of classes
  - active `{string}` marker of current active image
  - unactive `{string}` remaining markers of inactive images
  - controllerPrev `{string}` class of left control
  - controllerNext `{string}` class of right control

---

块采用面向对象方法，使用原生js的图片滚动代码。

使用方法非常简单，只需把引入该段代码，然后传入相关配置对象即可，可传入参数有：

- target `{string}` 包围图片的div的id，默认slide
- showMarker `{boolean}` 是否显示当前图片的标记值,默认false
- marker `{boolean}` 标记中是否有数字,默认false
- showController `{boolean}` 是否显示左右控制的标记,默认false
- setClass `{object}`
  - marker `{string}` 标记的CSS类，多个类之间用空格分开
  - active `{string}` 当前图片的标记类
  - unactive `{string}` 其余图片的标记类
  - controllerPrev `{string}` 向左控制的类
  - controllerNext `{string}` 向右控制的类

简单使用方式参见文件中的index.html

js代码比较简单，原理就不在赘述
