
const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')
const vars = require('./variables')
const graphs = require('./graphs')
//module.exports
var BaseConfig = {
    //context: path.resolve(__dirname, '../'), //基础目录，绝对路径
    entry: JSON.parse(JSON.stringify(graphs.entries)),
    output: {
        path: vars.dist_root,
        publicPath: vars.dev_publicPath,//相对于 HTML 页面的资源
        filename: './[name].[hash:8].js',
        chunkFilename: '[name].js'
    },
    resolve: {
        extensions: ['.js','.vue','.json'],
        alias: {  //目录别名
            'vue$': 'vue/dist/vue.esm.js',
            '@components': vars.components_root,
            '@pages': vars.pages_root,
            '@imgs': vars.imgs_root,
            '@': vars.src_root
        }
    },
    module: { //配置模块规则项
        rules: [
            // {
            //     loader: 'css-loader',
            //     options: {
            //         minimize: process.env.NODE_ENV == 'production'
            //     }
            // },
            // {
            //     loader: 'less-loader',
            //     options: {
            //         javascriptEnabled: true,
            //         globalVars:{}
            //     }
            // },
            {   //解析转换vue文件，提取其中的script，style，以及template，交给loader处理
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {

                    extractCSS: true
                }
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',// 用来提供css的热重载
                    'css-loader'// 用来处理css中的资源路径为模块
                ]
            },
            {
                test:/\.less$/,
                loader: "style-loader!css-loader!less-loader"
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                exclude: /(node_modules)/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'imgs/[name].[hash:8].[ext]',
                }
            }, {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                exclude: /(node_modules)/,
                loader: 'url-loader',
                options:{
                    limit: 10000,
                    name: 'medias/[name].[hash:8].[ext]'
                }
            }, {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                exclude: /(node_modules)/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:8].[ext]'
                }
            }
        ]
    },
    devServer: {hotOnly: true},
    mode: 'development',
    plugins: [
        new VueLoaderPlugin(),
        new ExtractTextPlugin("style.css"), //把vue文件的style提取到style.css
        ...graphs.html_plugins
    ]
}
for(let p in BaseConfig.entry){
    BaseConfig.entry[p].unshift(`webpack-dev-server/client?http://localhost:${vars.port}/`)
    BaseConfig.entry[p].unshift(`webpack/hot/dev-server`)
}
BaseConfig.devtool = 'cheap-module-source-map';
console.log(BaseConfig)
for(let name of graphs.graphs){
    console.log(`http://localhost:${vars.port}/templates/${name}.html`)
}
//代理配置
var final_proxy = {
    "/api/*":{
        target:"http://10.200.3.16:3202",
        changeOrigin: true,
        pathRewrite: {
            '^/api': ''
        },
        secure: false, // 接受 运行在 https 上的服务
    }
}
console.log(BaseConfig)
BaseConfig.plugins.push(new Webpack.HotModuleReplacementPlugin());
BaseConfig.plugins.push(new Webpack.NoEmitOnErrorsPlugin());
var compiler = Webpack(BaseConfig);
var server = new WebpackDevServer(compiler, {
    inline: true,                //设置为true，当源文件改变的时候会自动刷新
    contentBase: "./public", //默认webpack-dev-server会为根文件夹提供本地服务器
    hot: true,                   //允许热加载
    hotOnly: true,               //当编译失败时，不刷新页面
    open: false,//自动拉起浏览器
    historyApiFallback: true,
    disableHostCheck: true,
    proxy: final_proxy,
    publicPath: vars.dev_publicPath,
    overlay: true,                     //用来在编译出错的时候，在浏览器页面上显示错误
    progress:false,                    //显示打包的进度
    stats: {
        entrypoints: false,
        children: false,
        chunks: false,  // 使构建过程更静默无输出
        colors: true,    // 在控制台展示颜色
        modules: false,
        chunkModules: false
    }

});

server.listen(vars.port, 'localhost', function () {

});