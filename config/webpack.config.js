'use strict';

const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');
const PATHS = require('./paths');

// Merge webpack configuration files
const config = (env, argv) =>
  merge(common, {
    entry: {
      firebase: PATHS.src + '/firebase.js',
      background: PATHS.src + '/background.js',
      utils: PATHS.src + '/utils.js',
      sidebar: PATHS.src + "/Components/sidebar.js"
    },
    devtool: argv.mode === 'production' ? false : 'source-map',
  });

module.exports = config;
