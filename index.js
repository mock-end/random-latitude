'use strict';

var clamp       = require('clamp');
var assign      = require('object-assign');
var randomFloat = require('random-floating');

module.exports = function (options) {

  options = assign({
    fixed: 5,
    min: -90,
    max: 90
  }, options);

  options.min = clamp(options.min, -90, 90);
  options.max = clamp(options.max, -90, 90);

  return randomFloat(options);
};

