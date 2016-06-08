var path = require('path');

module.exports = {
    entry: ['babel-polyfill', './example.jsx'],
    output: {
        path: __dirname + '/lib/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname),
                    path.resolve(__dirname, '../src')
                ],
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-decorators-legacy'],
                    presets: ['es2015', 'stage-1', 'react'],
                }
            }
        ]
    }
};
