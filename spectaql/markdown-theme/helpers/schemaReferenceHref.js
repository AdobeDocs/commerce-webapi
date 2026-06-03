"use strict";

// Returns a GFM heading anchor (#typename) instead of SpectaQL's default
// #definition-TypeName. GFM auto-generates anchors by lowercasing the heading
// text, which means ## TypeName → #typename.
module.exports = function (reference, _options) {
  if (typeof reference !== 'string' || !reference) return '';
  if (reference.startsWith('#')) {
    return reference;
  }
  return '#' + reference.split('#/definitions/').pop().toLowerCase();
};
