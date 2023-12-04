const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development", // "production" | "development" | "none"  // Chosen mode tells webpack to use its built-in optimizations accordingly.

  entry: "./examples/index.js", // string | object | array  // 这里应用程序开始执行
  // webpack 开始打包

  output: {
    // webpack 如何输出结果的相关选项


    path: path.resolve(__dirname, 'dist-example'),
    filename: "[name].js", // string    // 「入口分块(entry chunk)」的文件名模板（出口分块？）

    // publicPath: "/assets/", // string    // 输出解析文件的目录，url 相对于 HTML 页面

    // library: "MyLibrary", // string,
    // 导出库(exported library)的名称

    // libraryTarget: "umd", // 通用模块定义    // 导出库(exported library)的类型


    /* 高级输出配置（点击显示） */
  },

  module: {
    // 关于模块配置

    rules: [
      // 模块规则（配置 loader、解析器等选项）

      {
        test: /\.js|jsx?$/, //配置要处理的文件格式，一般使用正则表达式匹配 
        // include: [
        //   path.resolve(__dirname, "/src")
        // ],
        exclude: /node_modules|build/,//使用的加载器名称 
        // 这里是匹配条件，每个选项都接收一个正则表达式或字符串
        // test 和 include 具有相同的作用，都是必须匹配选项
        // exclude 是必不匹配选项（优先于 test 和 include）
        // 最佳实践：
        // - 只在 test 和 文件名匹配 中使用正则表达式
        // - 在 include 和 exclude 中使用绝对路径数组
        // - 尽量避免 exclude，更倾向于使用 include

        enforce: "pre",
        enforce: "post",
        // 标识应用这些规则，即使规则覆盖（高级选项）

        loader: "babel-loader",
        // 应该应用的 loader，它相对上下文解析
        // 为了更清晰，`-loader` 后缀在 webpack 2 中不再是可选的
        // 查看 webpack 1 升级指南。

      },

      {
        test: /\.(css|less)$/, use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader'
          }
          ,{
            loader: 'postcss-loader'
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
    ],

    /* 高级模块配置（点击展示） */
  },

  // performance: {
  //   hints: "warning", // 枚举    maxAssetSize: 200000, // 整数类型（以字节为单位）
  //   maxEntrypointSize: 400000, // 整数类型（以字节为单位）
  //   assetFilter: function (assetFilename) {
  //     // 提供资源文件名的断言函数
  //     return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
  //   }
  // },

  devtool: "source-map", // enum  // 通过在浏览器调试工具(browser devtools)中添加元信息(meta info)增强调试
  // 牺牲了构建速度的 `source-map' 是最详细的。

  context: __dirname, // string（绝对路径！）
  // webpack 的主目录
  // entry 和 module.rules.loader 选项
  // 相对于此目录解析

  target: "web", // 枚举  // 包(bundle)应该运行的环境
  // 更改 块加载行为(chunk loading behavior) 和 可用模块(available module)

  // externals: { //??
  //   'react': 'React',
  //   'react-dom': 'ReactDOM'
  // },  // 不要遵循/打包这些模块，而是在运行时从环境中请求他们

  // stats: "errors-only",  // 精确控制要显示的 bundle 信息

  devServer: {
    // proxy: { // proxy URLs to backend development server
    //   '/api': 'http://localhost:3001'
    // },
    host: "dev.jd.com",
    port: '10088',
    contentBase: path.join(__dirname, 'examples'), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: true, // true for self-signed, object for cert authority
    noInfo: true, // only errors & warns on hot reload
    // ...
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'videoTs plugin',
      filename: 'index.html',
      template: './examples/index.html'
    })
  ],
  // 附加插件列表


  /* 高级配置（点击展示） */
}