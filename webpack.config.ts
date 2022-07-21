import * as path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as webpack from 'webpack';

import 'webpack-dev-server';

const config: webpack.Configuration = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.ts', '.tsx', '.scss', '.css']
    },
    module: {
        rules: [
            {
                test: /\.ts|tsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|jpg|svg)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[ext]'
                    }
                }
            },
            {
                test: /\.(css|scss)$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}

export default config;