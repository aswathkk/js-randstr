var expect = require('chai').expect;

var randstr = require('../index');

describe('#Random String Generator', function() {
    it('returns a string value', function() {
        var result = randstr('all', 6);
        expect(result).to.be.a('string');
    });
});
