const path = require('path')
const webpack = require('webpack')
const htmlwebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development', // development|production
	entry: './src/index.js',  // 入口配置
	output: {
        path : path.resolve(__dirname, './dist'),
        filename : 'bundle.js'
    }, // 输出配置
	module: {
        rules : [
            {test: /\.css$/,use:['style-loader','css-loader']},
            {test: /\.less$/,use:['style-loader','css-loader','less-loader']},
            {test: /\.(jpg|png|gif|bmp|jpeg)$/,use: 'url-loader?limit=7631&name=[name].[ext]'},
            {test: /\.js$/,use: 'babel-loader',exclude : /node_modules/} // 配置Babel 来转换高级的ES语法
            //limit 给定的值，是图片的大小，单位byte，如果我们引用的图片，大于或等于给定的limit值，则不会转为base64格式字符串，否则会转为base64格式字符串
        ]
    }, // 放置loader加载器，webpack本身只能打包commonjs规范的js文件，用于处理其他文件或语法
	plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlwebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index123.html'
        })
    ], // 插件，扩展功能
	// 以下内容进阶篇再涉及
	resolve: {}, // 为引入的模块起别名
	devServer: {
        open: true,
        port: 3000,
        contentBase : 'src',
        hot : true
    } // webpack-dev-server
};