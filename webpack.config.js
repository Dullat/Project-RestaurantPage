const path = require('path');
const HTML = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(jpg | jpeg | png | svg)$/i,
                type: 'asset/source'
            }
        ]
    },

    plugins: [
        new HTML({
            template: './src/index.html',
            filename: 'index.html'
        })
    ],
    mode: "production",
}