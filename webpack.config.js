var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: 'dist',
        filename: 'bundle.js?[hash]'
    },
    contentBase: './dist',
    devtool: 'inline-source-map',
    hot: true,
    module: {
        loaders: [
            {
                loader: 'babel',
                exclude: /node_modules/,
                test: /\.jsx?$/
            },
            {
                loaders: [ 'style', 'css' ],
                test: /\.css$/
            },
            {
                loader: 'file',
                test: /\.(svg|png|jpg|eot|woff|woff2|ttf)$/
            }
        ]
    },
    resolve: {
        extensions: [ '', '.js', '.jsx' ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/html/index.html'
        })
    ]
};
