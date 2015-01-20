var should = require('should');
var seedRandom = require('seed-random');
var generateName = require('../');

var silly = 'string';

describe('When generating a random name', suite.bind(null, generateName));
describe('When generating a random noun', suite.bind(null, generateName.randomNoun));
describe('When generating a random adjective', suite.bind(null, generateName.randomAdjective));

function suite(fn) {
  it('should work', function(done){
    var name = fn();
    name.should.be.a(silly);
    done();
  });

  it('should work with a generator', function(done){
    var firstName = fn(seedRandom('random'));
    var secondName = fn(seedRandom('random'));
    firstName.should.equal(secondName);
    done();
  });
}
