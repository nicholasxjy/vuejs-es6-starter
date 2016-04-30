var webpack = require('webpack');
var path = require('path');

var srcPath = path.join(__dirname, 'client', 'src');
var distPath = path.join(__dirname, 'client', 'dist');

module.exports = {
  context: srcPath,
  entry: [path.join(srcPath, 'main.js')],
  output: {
    path: distPath,
    filename: 'bundle.js',
    publicPath: path.join(__dirname, 'client')
  },
  resolve: {
    extensions: ['', '.js', '.vue']
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: path.join(__dirname, 'client', '[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  devtool: '#eval-source-map'
}
