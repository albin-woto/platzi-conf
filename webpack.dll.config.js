const path = require('path');
const Webpack = require('webpack');

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
    filename: 'script/[name].[id].dll.js',
    library: '[name]'
  },
  plugins: [
    new Webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, '[name]-manifest.json'),
    }),
  ],
};
