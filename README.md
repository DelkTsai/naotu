### naotu (脑图)
- 原生js实现，脑图组件
- 更好，更优雅的展示多层信息
- 源码：https://github.com/zhentaoo/naotu
- 使用：npm install naotu

### 开发环境整合webpack
- babel
- html-webpack-plugin
- css-loader
- webpack-dev-server

### 相关命令
-
-
-
### 遇到的问题
- 由于使用了全局webpack-dev-server，版本问题，导致启动一直失败
- 接下来所有的babel webpack依赖都local安装，不依赖全局环境
- 同时使用yarn锁定版本
