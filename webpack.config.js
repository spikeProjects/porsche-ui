const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// const extractCSS = new ExtractTextPlugin('stylesheets/[name]-css.css');
// const extractSASS = new ExtractTextPlugin('stylesheets/[name]-sass.css');
const webpack = require('webpack');

// npx webpack --config webpack.config.js
module.exports = {
  mode: 'production',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    pui: './src/index.js'
  },
  output: {
    filename: '[name].js',
    library: "PUI",
    libraryTarget: 'umd', //TODO
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".sass", ".scss"]
  },
  externals: {
    react: {  // /^react\/.+$/,
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'react'
    },
    lodash : {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    }
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
      // use: extractCSS.extract({
      //   fallback: "style-loader",
      //   use: "css-loader"
      // })
    }, {
      test: /\.(scss|sass)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
        use: ['css-loader', 'sass-loader']
      })
    }
    /* , {
        test: /\.less$/,
        loader: 'less-loader' // compiles Less to CSS
    } */
    , {
      test: /\.less$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'less-loader'
        // ,options: {
        //     paths: [
        //         path.resolve(__dirname, 'node_modules')
        //     ]
        // }
        }]
    }, {
      test: /\.(png|svg|jpg|gif|ico)$/i,
      use: [
        'file-loader',
        // 'image-webpack-loader'
      ]
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        'file-loader'
      ]
    }, {
      test: /\.(csv|tsv)$/,
      use: [
        'csv-loader'
      ]
    }, {
      test: /\.xml$/,
      use: [
        'xml-loader'
      ]
    },
    /**
     * Without any configuration options, babel-preset-env behaves exactly the same as:
     * babel-preset-latest 
     * (or babel-preset-es2015, babel-preset-es2016, and babel-preset-es2017 together).
     */
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    },
    // {
    //   test: /\.tsx?$/,
    //   use: ['awesome-typescript-loader' ]
    // }
    {
      test: /\.tsx?$/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        }
      ]
    }
    , {
      test: /\.html$/,
      loader: 'html-loader'
    }
    ]
  },
  plugins: [
    // new ExtractTextPlugin('style.css'),
    new ExtractTextPlugin({
      filename: (getPath) => {
        return 'style.css'
      },
      // filename:  (getPath) => {
      //   return getPath('css/[name].css').replace('css/js', 'css');
      // },
      allChunks: true
    }),
    // extractCSS,
    // extractSASS,
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
