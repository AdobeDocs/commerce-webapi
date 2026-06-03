'use strict';

module.exports = function singleLine(str) {
  if (typeof str !== 'string') return str || '';
  return str.replace(/\s*\n\s*/g, ' ').trim();
};
