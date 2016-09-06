const chai = require('chai');
const supertest = require('supertest');

const app = require('../app.js');

const should = chai.should();

const api = supertest(app);


describe('Sending a POST to /api/div', () => {
  describe('should succeed', () => {
    it('in multiplying two numbers together', (done) => {
      api.post('/api/div/6/2')
      .expect(200)
      .end((err, res) => {
        if(err) return done(err);
        res.body.result.should.be.equal(3);
        done();
      });
    });
  });
  describe('should fail', () => {
    it('when nothing is sent in', (done) => {
      api.post('/api/div')
      .expect(432)
      .end((err,res) => {
        if(err) return done(err);
        res.body.message.should.be.equal('No data');
        done();
      });
    });
  });
});
