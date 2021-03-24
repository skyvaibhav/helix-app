const HtmlWebPackPlugin = require('html-webpack-plugin'); // installed via npm
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env) => ({
  context: __dirname,
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|scss)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|svg|webp|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: './images',
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '@src': path.resolve(__dirname, 'src/'),
      '@app': path.resolve(__dirname, 'src/app'),
      '@images': path.resolve(__dirname, 'src/app/images'),
      '@middleware': path.resolve(__dirname, 'src/app/middleware'),
    },
  },
  devServer: {
    contentBase: path.join(__dirname, '/'),
    compress: true,
    historyApiFallback: true,
    port: 3010,
    publicPath: 'http://localhost:3010',
    hotOnly: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
      favicon: path.resolve(__dirname, 'public/helixSenseLogo.png'),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        TARGET_ENV: JSON.stringify(env ? env.TARGET_ENV : 'development'),
        ENV: JSON.stringify(process.env.ENV),
      },
    }),
  ],
});
