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
            {test: /\.css$/,use:['style-loader','css-loader']}
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