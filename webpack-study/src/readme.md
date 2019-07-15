+ ES6 语法 
    浏览器对部分语法还不能解析 所以需要下载webpack 对js打包

+ webpack
    webpack 能够处理JS文件的相互依赖关系，能够处理浏览器的兼容性问题
    webpack4 还需下载webpack-cli
    将代码打包的命令行：
    webpack .\src\main.js -o .\dist\bundle.js

+ webpack 配置文件
    在根目录新建一个 webpack.config.js
    就可以在命令行输入webpack 执行配置文件命令

+ ERROR in Entry module not found: Error: Can't resolve './src' in 'E:\simple file\mystudyarea\webpack-study'
    需要在src目录下建立一个index.js

+ 下载实时更新webpack代码工具
    npm i webpack-dev-server -D 安装到项目的本地开发依赖

+ 运行局域的插件
    npm run 插件名

+ webpack-dev-server 想要正常运行 在本地项目中必须安装webpack

+ webpack 想要打包处理css 文件，需要安装第三方loader加载器
    npm i style-loader -D

+ webpack 处理第三方插件的过程
    1. 发现要处理的文件是不是JS文件，然后去配置文件中，查找有没有对应的第三方loader规则
    2. 如果能找到对应的规则，就会调用 对应的 loader 处理 这种文件类型；
    3. 在调用loader 的时候，是从后往前调用的
    4. 当最后的一个 loader 调用完毕，会把 处理结果 直接交给webpack 静香 打包合并，最终输出到bundle.js 中去