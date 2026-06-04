'use strict';
const stringify = require('json-stringify-pretty-compact');

// SPECIALTAG wraps type-name placeholders. The regex includes the surrounding JSON quotes
// so "SPECIALTAGBucketSPECIALTAG" becomes the bare identifier Bucket.
// QUOTETAG wraps string-scalar placeholders; replacing with " restores visible quotes
// after the outer JSON quotes were stripped by the SPECIALTAG pass.
const SPECIAL_TAG_REGEX = /"?SPECIALTAG"?/g;
const QUOTE_TAG_REGEX = /QUOTETAG/g;

module.exports = function (json, _options) {
  if (!json) return '';
  return stringify(json, { indent: 2 })
    .replace(SPECIAL_TAG_REGEX, '')
    .replace(QUOTE_TAG_REGEX, '"');
};
