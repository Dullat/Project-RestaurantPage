let path = import('path');
let HTML = import('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.reslove(__dirname, 'dist')
    },

    devDerver: {
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
            template: './index.html',
            filename: 'index.html'
        })
    ]
}