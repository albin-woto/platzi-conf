const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'script/[name].js',
    publicPath: 'http://localhost:3001/',
    chunkFilename: 'script/[id].[chunkhash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader'],
      },
      {
        test: /\jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000,
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
      chunkFilename: 'css/[id].css'
    }),
    new Webpack.DllReferencePlugin({
      manifest: require('./modules-manifest.json'),
      context: path.resolve(__dirname, 'src')
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, 'dist/script/*.dll.js'),
      outputPath: 'script',
      publicPath: 'http://localhost:3001/sctipt'
    })
  ],
};
