const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    entry: {
        app: './index.js',
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: "app.css",
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: [
                    MiniCSSExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
}