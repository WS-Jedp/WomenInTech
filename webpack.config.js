const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  resolve:{
    extensions: ['.jsx', '.js', '.css']
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.(css)/,
        exclude: /node_modules/,
        use: [
          MiniCSSExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'resolve-url-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: 'postcss.config.js'
              }
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpeg|jpg|webp|gif)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              filename: '[name].[ext]',
              publicPath: 'assets/images',
              outputPath: 'assets/images'
            }
          }
        ]
      },
      {
        test: /\.(mp4)/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              filename: '[name].[ext]',
              publicPath: 'assets/videos',
              outputPath: 'assets/videos'
            }
          }
        ]
      },
      {
        test: /\.(woff|TTF)/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: 'assets/fonts',
              outputPath: 'assets/fonts'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: 'index.html',
    }),
    new MiniCSSExtractPlugin({
      filename: 'styles/[name].css',
      chunkFilename: '[id].css'
    })
  ]
};
