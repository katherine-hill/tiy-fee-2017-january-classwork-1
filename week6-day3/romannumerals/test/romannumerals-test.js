const chai = require('chai');
const assert = chai.assert;
const numerals = require('../romannumerals.js');

describe('Roman Numerals', function() {
    it('should return I for 1', function() {
        assert.equal(numerals(1), 'I');
    });
    it('should return II for 2', function() {
        assert.equal(numerals(2), 'II');
    });
});
