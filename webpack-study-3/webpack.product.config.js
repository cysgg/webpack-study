const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry : './src/index.js',
    mode : 'production',
    output : {
        filename : 'main.js',
        path : path.resolve(__dirname,'dist')
    },
    module : {
        rules : [
            {
                test : /\.css$/,
                use  : [
                    MiniCssExtractPlugin.loader,
                    {
                        loader : "css-loader",
                        options : {
                            sourceMap : true
                        }
                    },
                    {
                        loader : 'postcss-loader',
                        options : {
                            ident : 'postcss',
                            sourceMap : true ,
                            plugins : (loader)=>[
                                require('autoprefixer')({browsers : ['>0.15% in CN']})
                            ]
                        }
                    }
                ]
            }
        ]
    },
    plugins : [
        new MiniCssExtractPlugin({
            filename : '[name].css',
            chunkFilename : '[id].css'
        })
    ]
}