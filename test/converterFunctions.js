const myFunctions = require('../helpers/converter');
const chai = require('chai').should;
const expect = require('chai').expect;

const { converter, realWordChecker } = myFunctions;

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
    it('it should convert single key number');
    it('it should convert double key number');
  });

  describe('realWordChecker()', function () {
    it('it should return null if argument is not passed', function () {
      expect(realWordChecker()).to.be.a('null');
    });
    it('it should return null if argument is not an array', function () {
      expect(realWordChecker(2)).to.be.a('null');
      expect(converter('2')).to.be.a('null');
      expect(realWordChecker(undefined)).to.be.a('null');
      expect(realWordChecker({})).to.be.a('null');
      expect(realWordChecker(null)).to.be.a('null');
    });
    it('it should check if combination of letters can form a real word');
  });
});
