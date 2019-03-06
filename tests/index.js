const request = require('supertest');
const app = require('../app');

describe('API REST /',  () => {
    it('respond with json containing a welcome message',  (done) => {
        request(app)
            .get('')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});