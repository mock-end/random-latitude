'use strict';

var expect = require('chai').expect;


describe('random-altitude: ', function () {

  var randomAltitude = require('../../');

  it('common', function () {
    expect(randomAltitude())
      .to.be.within(-90, 90)
      .and
      .to.be.match(/^(-)?\d+(\.\d{1,5})?$/);
  });
});
