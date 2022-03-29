const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = () => ({
    mode: process.env.NODE_ENV,
    entry: { app: resolve(__dirname, 'src/index.tsx') },
    output: {
        filename: '[name].bundle.[chunkhash].js',
        assetModuleFilename: 'images/[name].[hash].[ext]',
        path: resolve(__dirname, 'dist'),
        clean: true,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '...'],
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['app'],
            minify: true,
            template: resolve(__dirname, 'src/index.html'),
        }),
    ],
    devtool:
        process.env.NODE_ENV === 'development' ? 'eval-source-map' : false,
});

module.exports = config;
