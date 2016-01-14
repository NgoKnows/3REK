var path = require('path');
var webpack = require('webpack');
var ROOT_DIR = __dirname;

module.exports = {
    context: ROOT_DIR,
    //devtool: 'inline-source-map',
    entry: [
        'webpack-hot-middleware/client',
        path.resolve(ROOT_DIR, 'client', 'js', 'index.js')
    ],

    resolve: {
        extensions: ['', '.js', '.jsx', '.es6.js'],
        alias : {
            react: path.join(__dirname, 'node_modules', 'react'),
            classes: path.join(ROOT_DIR, 'client', 'js', 'classes'),
            components: path.join(ROOT_DIR, 'client', 'js', 'components'),
            flux: path.join(ROOT_DIR, 'client', 'js', 'redux'),
            js: path.join(ROOT_DIR, 'client', 'js')
        }
    },

    output: {
        path: path.join(ROOT_DIR,'build'),
        filename: 'bundle.js'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: path.join(ROOT_DIR, 'node_modules'),
                query: {
                    "presets": ["es2015", "react", "stage-0"],
                    "env": {
                        "development": {
                            "presets": ["react-hmre"]
                        }
                    }
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
        ]
    }
};