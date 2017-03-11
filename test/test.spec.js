var expect = require('chai').expect;

var randstr = require('../index');

describe('Random String Generator', function() {
    it('returns a string value', function() {
        var result = randstr(6);
        expect(result).to.be.a('string');
    });

    it('returns 32 characters by default', function() {
        var result = randstr();
        expect(result).to.be.of.length(32);
    });

    it('returns string of specified length', function() {
        var result = randstr(6);
        expect(result).to.be.of.length(6);
    });

    it('returns string of custom charset', function() {
        var str = randstr(5, 'abc');
        var result = str.search(/[^abc]/);
        expect(result).to.equal(-1);
    });
});
