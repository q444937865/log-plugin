# A log plugin for webpack

_thx for orzyyyy_

## 用法

- 添加依赖`git+https://github.com/q444937865/log-plugin.git`，并安装它。
- 在你的 webpack.config.js 中使用它

  ```javascript
  import logPlugin from 'log-plugin';

  module.exports = {
    plugins: [new logPlugin({ showWord: true })]
  };
  ```

- 如果想去掉默认 webpack 信息，请设置`noInfo: false`

- 成功后你会看到如下信息

  ![截图](./shot.png)
  
### 请尽情的食(bian)用(ta)它吧.