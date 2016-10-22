import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  context: resolve('./src'),
  entry: './index.js',
  output: {
    path: resolve('./dist'),
    filename: 'app.[hash].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  devServer: {
    contentBase: resolve('./dist'),
    inline: true
  }
};
