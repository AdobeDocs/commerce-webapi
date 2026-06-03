'use strict';
const path = require('path');
const defaultGruntConfig = require(
  path.join(__dirname, '../node_modules/spectaql/dist/lib/gruntConfig.js')
);

module.exports = function (grunt, options, spectaqlData) {
  const config = defaultGruntConfig(grunt, options, spectaqlData);

  // Skip prettify for Markdown output — js-beautify treats .md as HTML and
  // collapses all whitespace. Point prettify at a nonexistent path so it finds
  // no files to process and leaves the compiled template untouched.
  config.prettify = {
    options: {},
    index: {
      src: options.cacheDir + '/_nonexistent_skip_prettify_',
      dest: options.cacheDir + '/_nonexistent_skip_prettify_'
    }
  };

  return config;
};
