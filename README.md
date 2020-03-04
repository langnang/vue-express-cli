# Vue+Express 前后端脚手架

> 构建以 Vue 作为客户端，Express 作为服务端的全栈独立项目脚手架

## Router

- `/`：项目客户端 UI
- `/api`：服务端数据
- `/server` ：服务端 UI

## Menu

```bat
└─src
    ├─client
    │  ├─public
    │  └─src
    │      ├─assets
    │      └─components
    └─server
        ├─bin
        ├─public
        │  ├─images
        │  ├─javascripts
        │  └─stylesheets
        ├─routes
        └─views
```

## 分别启动服务

新建项目文件夹`vue-express-cli`
新建子文件夹 `src` 用于存放 `vue-cli` 与 `express-generator` 生成项目
`express server`
`vue create client`
调整生成项目中的部分文件位置并将相同文件合并
测试启动 express 服务->成功
测试启动 vue 服务->失败`This relative module was not found: * ./src/main.js in multi...`
新建`vue.config.js`来修改 vue-cli 的默认配置

```js
module.exports = {
  pages: {
    index: "src/client/src/main.js"
  }
};
```

## Express 使用 Vue 生成的页面

`express` 使用的是源于 Node.js 的 HTML 模板引擎，而我们 vue 打包成的文件是 html，因此在这里将 `Jade` 改为 `ejs`。

首先在 `myapp` 项目根目录下安装 `ejs`：

```bat
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
