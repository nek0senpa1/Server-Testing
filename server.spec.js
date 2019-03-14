const request = require('supertest');



const server = require('./server.js');

describe('server file', () => {

    it('should set testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

      
    it('should return 200', async () => {
        const res = await request(server).get('/');

        expect(res.status).toBe(200);
    });

    it('should return JSON', async () => {
        const res = await request(server).get('/');

        expect(res.type).toBe('application/json');
    });

  
});
