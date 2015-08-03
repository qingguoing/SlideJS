# SlideJS
一块采用面向对象方法，使用原生js的图片滚动代码。

使用方法非常简单，只需把引入该段代码，然后传入相关配置对象即可，可传入参数有：
 - target {string}包围图片的div的id，默认slide
 - showMarker {boolean} 是否显示当前图片的标记值,默认false
 - marker {boolean} 标记中是否有数字,默认false
 - showController {boolean} 是否显示左右控制的标记,默认false
 - setClass {object}
  - marker {string} 标记的CSS类，多个类之间用空格分开
  - active {string} 当前图片的标记类
  - unactive {string} 其余图片的标记类
  - controllerPrev {string} 向左控制的类
  - controllerNext {string} 向右控制的类

简单使用方式参见文件中的index.html
