module.exports = {
    plugins: [
      // require('postcss-flexbugs-fixes'),
      require("autoprefixer"), // 环境配置使用package.json中的browserslist
      // require("postcss-aspect-ratio-mini"),
      // require("postcss-write-svg")({ utf8: false }),
      require("postcss-plugin-px2rem")({
        rootValue: 100,
        unitPrecision: 5,
        propWhiteList: [],
        propBlackList: [],
        exclude: false,
        selectorBlackList: [],
        ignoreIdentifier: false,
        replace: true,
        mediaQuery: false,
        minPixelValue: 0
      }),
      // require("cssnano")({
      //   // preset: "advanced",
      //   autoprefixer: false,
      //   "postcss-zindex": false,
      //   reduceIdents: false
      // })
  
    ]
  }
  