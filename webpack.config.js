const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const isProductionMode = process.env.NODE_ENV === 'production';
const defineFileName = fileExtension => isProductionMode ? `bundle.[hash:base64].${fileExtension}` : `bundle.${fileExtension}`;

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development', //default mode btw
    entry: ['babel-polyfill', './main.js'],
    output: {
        filename: defineFileName('js'),
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@core': path.resolve(__dirname, 'src/core'),
        }
    },
    devtool: !isProductionMode ? 'source-map' : false,
    devServer: {
        port: 3000,
        hot: !isProductionMode
    },
    plugins: [
        new CleanWebpackPlugin.CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
            minify: {
                removeComments: isProductionMode,
                collapseWhitespace: isProductionMode,
                continueOnParseError: !isProductionMode,
                removeAttributeQuotes: isProductionMode,
                removeEmptyElements: isProductionMode,
                removeEmptyAttributes: isProductionMode
            }
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/image/favicon.ico'),
                    to: path.resolve(__dirname, 'dist')
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: defineFileName('css'),
        })
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader"
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader', 'eslint-loader']
            }
        ]
    },
};