module.exports = function (api) {
    api.cache(true);

    const presets = [
        [
            "@babel/preset-env",
            {
                // debug: false,
                modules: false, // tree shaking 时必须为false
                // 使用package.json中 的browserslist，这样可以和autoprefixer, postcss保持一致
                targets: ["> 1% in CN", "last 4 versions", "iOS >= 8", "Android >= 4"],
                useBuiltIns: "usage", // 按需加载polyfill
                corejs: 3,
            },
            "@babel/preset-react"
        ]
    ];
    const plugins = [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-syntax-object-rest-spread",
        "@babel/plugin-transform-react-jsx"
    ];

    return {
        presets,
        plugins
    };
}