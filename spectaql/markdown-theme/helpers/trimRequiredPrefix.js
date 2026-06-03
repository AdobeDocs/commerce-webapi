'use strict';

module.exports = function trimRequiredPrefix(str) {
  if (typeof str !== 'string') return str;
  return str.replace(/^Required\.\s*/i, '');
};
