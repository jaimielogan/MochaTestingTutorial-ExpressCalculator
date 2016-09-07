const chai = require('chai');

const should = chai.should();

describe('Canary Test', function(){
  it('the string hello should be hello', function(){
    const hi = 'hi';

    hi.should.be.a('string');
  });
});
