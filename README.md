Vue + Express 前后端脚手架（基于iViewUI）
=========================================

在原版本基础之上，修改了webpack的相关配置文件。使得项目可以运行build命令，编译vue相关代码。
前端部分增加了vue全家桶（vue-router，vuex）以及iView的关联
后端express部分增加有history模式
重新修改了文件夹结构

fork源：[southerncross/vue-express-dev-boilerplate](https://github.com/southerncross/vue-express-dev-boilerplate)

## 关键词

- Vue (vue-router + vuex)
- iView
- Express
- Nodemon
- Webpack
- Npm


## 用法

1. 安装依赖包

   `npm install`

2. 运行开发环境

   `npm run dev`

3. build前端代码

    `npm run build`
    
    生成后的代码会在根目录的dist目录下。
    此时可专门写一个生产环境启动express的脚本。

## 参考资料

Some ideas are stolen from them, really appreciated.

- [Eslint guide](http://eslint.org/docs/user-guide/getting-started)
- [Express generator](http://expressjs.com/en/starter/generator.html)
- [Vue template](https://github.com/vuejs-templates/webpack)
- [Nodemon doc](https://github.com/remy/nodemon#nodemon)
- [Babel register](http://www.ruanyifeng.com/blog/2016/01/babel.html)
- [webpack-dev-middleware-boilerplate](https://github.com/madole/webpack-dev-middleware-boilerplate/tree/master/src)
- [how-can-i-use-webpack-with-express](http://stackoverflow.com/questions/31102035/how-can-i-use-webpack-with-express)
- [The-ultimate-webpack-setup](http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup)
