const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  module: {
      rules: [
          {
              test: /\.(css|s[ca]ss)$/,
              use: [
                  'style-loader', // creates style objects in JS
                  'css-loader', // compiles css to CommonJS
                  'sass-loader' // enable compilation of sass files
              ]
          },
          {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: /node_modules/
          },
          {
              test: /\.(svg|jpg|jpeg|gif|png)$/,
              use: 'file-loader'
          },
          {
            test: /\.svg$/,
            use: '@svgr/webpack'
        }
      ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.jsx' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
        template: path.join(__dirname, 'src/index.html'),
        inject: 'body'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 9000
  }, 
};