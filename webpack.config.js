const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {   
    mode: 'development', 
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        proxy: {
           "/": "http://localhost:5000"
        }
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    context: __dirname,
    module:{
        rules:[
            {
                test: /jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                  presets: [
                    "@babel/preset-react",
                    "@babel/env",
                    {'plugins': [
                        '@babel/plugin-proposal-class-properties'
                    ]}
                  ]
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader',
                ],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(jpg|png|woff|woff2|eot|otf|ttf|svg)$/,
                use: {
                    loader: 'url-loader',
                },
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devtool: 'source-map'
}