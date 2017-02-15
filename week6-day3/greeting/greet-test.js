const assert = require('assert');
const greet = require('./greet.js');

function testGreetMom() {
    assert.equal(greet.hi('mom'), 'Hey, mom.', 'Values did not match');
}

function testGoodbye() {
    assert.equal(greet.bye('dad'), 'Goodbye, dad.', 'Values did not match for Goodbye');
}

testGreetMom();
testGoodbye();
