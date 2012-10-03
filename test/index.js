var should = require('should');
var generateName = require('../');

var silly = 'string';

describe('When generating a random name', function(){
  it('should work', function(done){
    var name = generateName();
    name.should.be.a(silly);
    done();
  });
});
