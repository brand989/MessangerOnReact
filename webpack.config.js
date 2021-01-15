// const path = require('path');
// const webpack = require('webpack');


// module.exports = {
//     devServer:{
//         publicPath: path.resolve(__dirname, 'static', 'build'),
//         port: 5000,
//         hot: true,
//         compress: true,
//         historyApiFallback: {
//             index: 'index.html'
//         },
//     },
//     devtool:'inline-source-map',
//     plugins: [
//         new webpack.HotModuleReplacementPlugin(),
//     ],
//     entry: {
//         app: './index.jsx'
//     },
//     context: path.resolve(__dirname, 'src'),
//     output: {
//         path: path.resolve(__dirname, 'static', 'build'),
//         filename: 'app.js',
//         publicPath: path.resolve(__dirname, 'static', 'build')
//     },
//     module: {
//         rules: [
//             { 
//                 test: /\.jsx?$/,
//                 include: path.resolve(__dirname, 'src'),
//                 exclude: path.resolve(__dirname, 'node_modules'),
//                 loader: 'babel-loader',
//                 options: {
//                     presets: ['@babel/env', '@babel/react'],
//                     plugins: ['@babel/plugin-proposal-class-properties']
//                 }
//             },
//             {
//                 test: /\.css$/,
//                 use:['style-loader','css-loader']
//             }    
//         ]
//     },
   
// };

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './index.jsx'
  },
  context: path.resolve(__dirname, 'src'),
  devtool: 'inline-source-map',
   devServer: {
       contentBase: './dist'
   },
     module: {
         rules: [
             {
               test: /\.jsx?$/,
               include: path.resolve(__dirname, 'src'),
               exclude: path.resolve(__dirname, 'node_modules'),
               loader: 'babel-loader',
               options: {
                   presets: ['@babel/env', '@babel/react'],
                   plugins: ['@babel/plugin-proposal-class-properties']
               }
             },
             {
               test: /\.css$/,
               use: ['style-loader', 'css-loader']
             }
         ]
     },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
      extensions: ['.js', '.jsx']
  }
};