const chai = require('chai');
const supertest = require('supertest');

const app = require('../app.js');

const should = chai.should();

const api = supertest(app);


describe('Sending a POST to /api/mult', () => {
  describe('should succeed', () => {
    it('in multiplying two numbers together', (done) => {
      api.post('/api/mult/5/2')
      .expect(200)
      .end((err, res) => {
        if(err) return done(err);
        res.body.result.should.be.equal(10);
        done();
      });
    });
  });
  describe('should fail', () => {
    it('when nothing is sent in', (done) => {
      api.post('/api/mult')
      .expect(432)
      .end((err,res) => {
        if(err) return done(err);
        res.body.message.should.be.equal('No data');
        done();
      });
    });
  });
});
