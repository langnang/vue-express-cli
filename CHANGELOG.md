# Vue-Express-CLI

## v1.0

### v1.0.0

- 分别启动服务

新建项目文件夹`vue-express-cli`
新建子文件夹 `src` 用于存放 `vue-cli` 与 `express-generator` 生成项目
`express server`
`vue create client`
调整生成项目中的部分文件位置并将相同文件合并
测试启动 express 服务->成功
测试启动 vue 服务->失败`This relative module was not found: * ./src/main.js in multi...`
新建`vue.config.js`来修改 vue-cli 的默认配置

```node
module.exports = {
  pages: {
    index: "src/client/src/main.js"
  }
};
```

- Express 使用 Vue 生成的页面

`express` 使用的是源于 Node.js 的 HTML 模板引擎，而我们 vue 打包成的文件是 html，因此在这里将 `Jade` 改为 `ejs`。

首先在 `myapp` 项目根目录下安装 `ejs`：

```node
npm install ejs --save-dev
```

然后在 `app.js` 将 `view engine` 修改为 `ejs`。

```js
app.set("views", path.join(__dirname, "views"));
app.engine(".html", require("ejs").__express);
app.set("view engine", "html");
```

此时模板引擎已经修改为 ejs，那么原来 express 生成的 .jade 文件也就不能直接识别了，如果需要留着，需要在引入它的时候加上.jade 后缀。如 app.js 中：

```js
// res.render('error');
res.render("error.jade");
```

- 客户端安装引入 Vue-Router

Vue-Router 默认使用 hash 模式
正常安装并在客户端页面中正常使用后打包
服务端亦可正常使用

在使用 history 模式下
不刷新页面的情况下可正常使用
若刷新页面则会倒是未注册的路由无法显示
**解决方案**：在服务端注册相同路由并指向 index

- Vue-CLI 配置修改后自动打包

安装使用 nodemon

```node
npm install -g nodemon
```

- 连接 Vue+Express 使只需要单个命令可启动整个项目
