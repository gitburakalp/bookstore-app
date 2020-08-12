const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: ['./src/index.jsx', './src/sass/main.scss'],
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    publicPath: '/',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(jsx)$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
      },
      {
        test: /\.scss$/,
        use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'ReactReduxSassStarterkit',
      inject: false,
      template: require('html-webpack-template'),
      bodyHtmlSnippet:
        '<div id="app"></div><script src="js/main.js"></script><script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script><script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossorigin></script><script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],
};
