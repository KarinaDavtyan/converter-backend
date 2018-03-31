const myFunctions = require('../helpers/converter');
const chai = require('chai').should;
const expect = require('chai').expect;

const {
  converter,
} = myFunctions;

describe('functions', function () {
  describe('converter()', function () {
    it('it should return null if argument is not passed', function () {
      expect(converter()).to.be.a('null');
    });
    it('it should return null if argument is not a string', function () {
      expect(converter(2)).to.be.a('null');
      expect(converter(undefined)).to.be.a('null');
      expect(converter([])).to.be.a('null');
      expect(converter({})).to.be.a('null');
    });
    it('it should convert single key number', function () {
      expect(converter('2'))
        .to.eql(['a','b','c']);
    });
    it('it should convert double key number', function () {
      expect(converter('23'))
        .to.eql(['ad','ae','af','bd','be','bf','cd','ce','cf']);
      expect(converter('89'))
        .to.eql(['tw','tx','ty','tz','uw','ux','uy','uz','vw','vx','vy','vz']);
    });
  });
});
