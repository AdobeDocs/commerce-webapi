const path = require('path');

module.exports = {
    entry: './gatsby-config.js',
    output: {
      path: path.resolve(__dirname, 'eds/out'),
      filename: 'gatsbyConfig.js',
      library: 'gatsbyConfig',    
      libraryTarget: 'commonjs2',
      umdNamedDefine: true 
    }
};