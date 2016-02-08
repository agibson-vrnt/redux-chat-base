/*eslint-env node*/

var path = require( "path" );

module.exports = {

    entry: path.resolve( __dirname, "js/index.js" ),
    output: {

        path: path.resolve( __dirname, "app/public/js/bundle.js" ),
        publicPath: "/public/js/",
        filename: "bundle.js"

    },
    module: {

        "loaders": [
            {
                "test": /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]

    }

};
