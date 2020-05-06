const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'script/[name].js',
    publicPath: 'http://localhost:9000/',
    chunkFilename: 'script/[id].[chunkhash].js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    open: true,
    port: 9000,
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
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/'
          },
        },
      },
    ],
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
    }),
  ],
};
