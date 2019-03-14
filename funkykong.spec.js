const db = require('./databee/dataBeeConfig');
const Things = require('./funkykong');

describe('the funkadactyl', () => {

    describe('put func', () => {
    
        afterEach(async () => {
        await db('widgets').truncate();
        });


        it('should insert stuff', async () => {
            let candy = await Things.put({ whosits: 'Bilbo' });
            expect(candy.whosits).toBe('Bilbo');
      
           
          });;
      

    });

});