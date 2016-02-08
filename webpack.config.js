/*eslint-env node*/

var path = require( "path" );
var webpack = require( "webpack" );

module.exports = {

    entry: "./js/index.js",
    output: {

        path: __dirname + "/app/public/js",
        filename: "bundle.js",
        publicPath: "/public/js/"

    },
    module: {

        loaders: [ {

            loader: "babel-loader",
            exclude: /node_modules/,
            query: {

                presets: ["es2015", "react"]

            }

        } ]

    },
    watch: true,
    devServer: {

        contentBase: "/app"

    },
    plugins: [

        new webpack.WatchIgnorePlugin( [

            path.resolve( __dirname, "./node_modules" ),
            path.resolve( __dirname, "./app" )

        ] )

    ]

};
