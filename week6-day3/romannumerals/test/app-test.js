const chai = require('chai');
const assert = chai.assert;
const app = require('../app.js');

describe('App', function() {
    describe('Check Palindrome', function() {
        it('should return true for racecar', function() {
            assert.equal(app.checkPalindrome('racecar'), true);
        });
        it('should return false for computer', function() {
            assert.equal(app.checkPalindrome('computer'), false);
        });
        it('should return true for 212', function() {
            assert.equal(app.checkPalindrome(212), true);
        });
        it('should return false for 7186', function() {
            assert.equal(app.checkPalindrome(7186), false);
        });
    });

    describe('String Replace', function() {
        it('should replace mom with dad', function() {
            assert.equal(app.stringReplace('Hey mom', 'mom', 'dad'), 'Hey dad');
        });
    });
});
