const converterFunctions = require('../helpers/converter');
const realWordCheckerFunctions = require('../helpers/realWordChecker');
const chai = require('chai').should;
const expect = require('chai').expect;

const { converter } = converterFunctions;
const { realWordChecker } = realWordCheckerFunctions;

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
  describe('realWordChecker()', function () {
    it('it should return only real words if they exist', function () {
      const input = ['dtm','dtn','dto','dum','dun','duo','dvm','dvn','dvo','etm','etn','eto','eum','eun','euo','evm','evn','evo','ftm','ftn','fto','fum','fun','fuo','fvm','fvn','fvo'];
      expect(realWordChecker(input))
        .to.eql(['duo', 'fun']);
    });
    it('it should return input if real words do not exist', function () {
      const input = ['w','x','y','z'];
      expect(realWordChecker(input))
        .to.eql(input);
    });
  });
});
