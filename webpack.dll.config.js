const path = require('path');
const Webpack = require('webpack');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    modules: [
      'react',
      'react-dom',
      'react-router-dom',
      'md5'
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'script/[name].[hash].dll.js',
    library: '[name]'
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin(),
    ]
  },
  plugins: [
    new Webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, '[name]-manifest.json'),
    }),
  ],
};
