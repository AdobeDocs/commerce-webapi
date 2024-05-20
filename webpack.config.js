const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
let gatsbyConfig = require('./gatsby-config.js');

function modify(buffer) {
    // copy-webpack-plugin passes a buffer
    var manifest = JSON.parse(buffer.toString());
 
    // make any modifications you like, such as
    //manifest.version = package.version;
 
    // pretty print to JSON with two spaces
    manifest_JSON = JSON.stringify(manifest, null, 2);
    return manifest_JSON;
 }

module.exports = {
    entry: './gatsby-config.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'nav.js',
      library: 'undefined',    // very important line
      libraryTarget: 'window',    // very important line
      umdNamedDefine: true 
    },
    plugins: [
        
    ]
};