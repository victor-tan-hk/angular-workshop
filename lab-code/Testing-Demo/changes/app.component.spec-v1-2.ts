import { Person } from './person';


// Demonstrating sequence of beforeAll, afterAll,
// beforeEach and afterEach 

describe('Demonstrating sequence of beforeAll, afterAll, beforeEach and afterEach', () => {


  beforeAll(() => {
    console.log('beforeAll() is called before all specs are run');
  });

  afterAll(() => {
    console.log('afterAll() is called after all specs are run');
  });

  beforeEach(() => {
    console.log('beforeEach() is called before each spec is run');
  });

  afterEach(() => {
    console.log('afterEach() is called after each spec is run');
  });



  it('Dummy spec 1', () => {
    console.log("Running Dummy spec 1");
    // Dummy expectation that always succeeds
    expect(true).toBe(true);
  });

  it('Dummy spec 2', () => {
    console.log("Running Dummy spec 2");
    expect(true).toBe(true);
  });
  
  it('Dummy spec 3', () => {
    console.log("Running Dummy spec 3");
    expect(true).toBe(true);
  }); 


});
