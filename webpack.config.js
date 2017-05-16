const debug = process.env.NODE_ENV !== "production";
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

const extractCSS = new ExtractTextPlugin('app.css');
const notifier = new WebpackNotifierPlugin({excludeWarnings: true});

module.exports = {
  entry: [
      './app/index.js'
  ],
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: debug ? 'inline-source-map' : 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          },
          'eslint-loader',
        ],
      },
      {
        test: /\.css$/,use: extractCSS.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader']
        })
      },
      {
        test: /\.scss$/,use: extractCSS.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: !debug,
                sourceMap: !debug,
                importLoaders: 1
              }
            },
            { loader: 'postcss-loader', options: { sourceMap: !debug } },
            { loader: 'sass-loader', options: { sourceMap: !debug } },
          ],
        })
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: debug ? [
          'url-loader?limit=10000',
        ] : [
          'url-loader?limit=10000',
          'img-loader',
        ]
      }
    ]
  },
  plugins: debug ? [
    new StyleLintPlugin(),
    extractCSS,
    notifier,
  ] : [
    new StyleLintPlugin(),
    extractCSS,
    new UglifyJSPlugin({
      mangle: {
        except: ['$super', '$', 'exports', 'require']
      },
      compress: {
        warnings: true
      },
      unsafe: true,
      collapse_vars: true,
      sourceMap: true
    }),
    notifier,
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    watchContentBase: true
  }
};