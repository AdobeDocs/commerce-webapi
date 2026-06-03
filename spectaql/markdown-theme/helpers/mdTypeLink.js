"use strict";
const { analyzeTypeIntrospection, introspectionTypeToString } =
  require('../../../node_modules/spectaql/dist/spectaql/type-helpers');
const mdLink = require('../../../node_modules/spectaql/dist/themes/default/helpers/mdLink');

// Generates Markdown links with GFM-compatible anchors (#typename lowercase)
// instead of SpectaQL's default #definition-TypeName, which requires <a> tags
// that EDS does not support.
module.exports = function mdTypeLink(thing, options) {
  if (!thing.type) thing = { ...thing, type: thing };

  const { underlyingType } =
    thing.response || analyzeTypeIntrospection(thing.type);

  if (!underlyingType) {
    return thing.name;
  }

  const url = '#' + underlyingType.name.toLowerCase();
  const text = introspectionTypeToString(thing.type);
  return mdLink(text, url, options);
};
