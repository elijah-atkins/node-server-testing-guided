const Hobbits = require('./hobbitsModel');
const db = require('../data/dbConfig.js');

describe('hobbits model', () => {
    describe('insert', () => {
        beforeEach(async () => {
            await db('hobbits').truncate()
        })
        it('should insert to provided hobbits into the db', async () => {
            await Hobbits.insert({name:'frodo'});
            await Hobbits.insert({name: 'sam'});

            const hobbits = await db('hobbits');
            expect(hobbits).toHaveLength(2);
        })
        it('should return the hobbit we inserted', async () => {
            let hobbit = await Hobbits.insert({name:'bilbo'});
            expect(hobbit.name).toBe('bilbo');

            hobbit = await Hobbits.insert({name: 'gaffer'});
            expect(hobbit.name).toBe('gaffer')
        })
        it('is pointless', () => {
            expect(true).toBe(true);
        })
    }) 
})