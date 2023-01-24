const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    clean: true,
  },
  mode: 'production',
  optimization: {
    minimize: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'swc-loader',
          options: {
            module: {
              type: 'commonjs',
            },
            jsc: {
              preserveAllComments: true
            },
          },
        },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({template: './src/index.html'})]
}
