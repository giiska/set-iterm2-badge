# set iterm2 badge

Thanks to [@sel-fish](http://stackoverflow.com/questions/36613285/how-to-exec-script-to-set-iterm2-badge-from-nodejs)

## Usage

Use it in your Webpack config, Gulpfile.js, Express app or other Node project to set a distinct infomation on the right up corner of Iterm2.

```js
var setIterm2Badge = require('set-iterm2-badge');
var port = '8088';
setIterm2Badge(port);
```

Result

![result](http://ww3.sinaimg.cn/large/6110a121gw1f2wbj234hoj20qq0g83yv.jpg)