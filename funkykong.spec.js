const db = require('./databee/dataBeeConfig');
const Things = require('./funkykong');
const server = require('./server.js');
const request = require('supertest');



describe('the funkadactyl', () => {

    describe('put func', () => {
    
        // afterEach(async () => {
        // await db('widgets').truncate();
        // });


        it('should insert stuff', async () => {
            let candy = await Things.put({ whosits: 'Bilbo' });
            expect(candy.whosits).toBe('Bilbo');
      
           
          });;
      

    });

    describe('pull func', () => {

        
        it('should delete stuff', async () => {
            let response = await Things.pull(5)
            expect(response.id).toBe(undefined) 
        })

    });

});