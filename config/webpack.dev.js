const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
  module: {
    loaders: [
      { test: /\.scss$/, loaders: ['style', 'css?sourceMap', 'sass?config=sassLoader'] },
    ]
  }
});
