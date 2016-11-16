import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import WebpackMd5Hash from 'webpack-md5-hash'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: {
    vendor: path.resolve(__dirname, 'source/vendor'),
    main: path.resolve(__dirname, 'source/index'),
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'output'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    // Generate a css file with cache busting
    new ExtractTextPlugin('[name].[contenthash].css'),

    // Generate hash of bundles for cache busting
    new WebpackMd5Hash(),

    // create HTML file that includes reference to bundle,
    new HtmlWebpackPlugin({
      template: 'source/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJs: true,
        minifyCss: true,
        minifyUrls: true,
      }
    }),

    // Eliminate duplicate packages
    new webpack.optimize.DedupePlugin(),

    // Minify
    new webpack.optimize.UglifyJsPlugin(),
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap') }
    ]
  }
}
