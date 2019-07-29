const glob = require('glob');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const vars = require('./variables')
var graphs = []
var entries = {}
var html_plugins = []
var routes_instance = new glob.Glob('*.js', {
    cwd: vars.routes_root,
    sync: true
})
var routes_list = routes_instance.found;

var ignore_html = ['demo']
for(var route_file of routes_list){
    var name = route_file.replace(/(.*\/)*([^.]+).*/ig, '$2');
    //if(ignore_html.indexOf(name)!=-1)
    //continue
    entries[name] = [path.resolve(vars.routes_root, route_file)]
    graphs.push(name)
}

for(var name of graphs){
    const _html = new HTMLWebpackPlugin({
        filename: `./templates/${name}.html`,
        template: `${vars.templates_root}/${name}.html`,
        favicon: `${vars.imgs_root}/favicon.png`,
        chunks: ['vendors', 'common', name],
        hash: true,
        inject: 'body',
        minify: {
            caseSensitive: false, //以区分大小写的方式处理自定义标签内的属性
            removeComments: true, //去除注释
            collapseWhitespace: false  //去除空格
        }
    })
    html_plugins.push(_html);
}
var _exports = {routes_list, graphs, entries, html_plugins}

console.log(_exports)
module.exports = _exports;