const reguest = require('supertest');
const buildApp = require('../../app');
const UserRepo = require('../../repos/user-repo');
const pool = require('../../pool');
const Context = require('../context');

let context;
beforeAll(async () => {
  context = await Context.build();
});

beforeEach(async()=>{
    await context.reset();
})

afterAll(() => {
  return context.close();
});


it('create a user', async () => {

    const startingCount = await UserRepo.count();

    await reguest(buildApp())
        .post('/users')
        .send({ username: 'testname', bio: 'testbio' })
        .expect(200);

    const finishingCount = await UserRepo.count();
    expect(finishingCount - startingCount).toEqual(1);
});
