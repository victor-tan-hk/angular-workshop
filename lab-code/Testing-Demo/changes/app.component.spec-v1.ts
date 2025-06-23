import { Person } from './person';


// Demonstrating standard in-built matchers
// toBe(), toEqual(), toBeDefined(), toBeTrue(), toBeFalse(), 
// toBeGreaterThan(expected), toBeLessThan(expected)

describe('Demonstrating basic Jasmine tests', () => {

  // At the start of the describe function can define as many functions
  // objects as necessary
  function addThreeNumbers(a : number, b : number , c : number) {
    return a + b + c;
  }

  it('Demonstrating toBe() matcher', () => {

/*     toBe is the simplest matcher that applies to all possible JavaScript values. 
    Internally, it uses JavaScript’s strict equality operator ===
    It is useful to compare primitive values like strings, numbers and booleans. 
 */
    console.log("Running the toBe matcher spec");
    let firstNum = 5;
    let firstName = 'Peter';
    let firstBool = false;

    expect(firstNum).toBe(5);
    expect(firstName).toBe('Peter');
    expect(firstBool).toBe(false);
    
    expect(2 + 6 - 5).toBe(3);
    expect(addThreeNumbers(1,2,3)).toBe(6);
    expect(firstName + ' Parker').toBe('Peter Parker');
    expect(firstName.toLocaleUpperCase()).toBe('PETER');

/*     For objects, toBe matches only if the actual and the expected 
    value are the very same object. 
 */

    let p1: Person = new Person('Spiderman',22,false);

    expect(p1.getPersonDetails()).toBe('Spiderman is 22 years old and is single');
    
    p1.increaseAge(30);
    expect(p1.age).toBe(52);


    // Both p2 and p1 are referencing the same object
    let p2 = p1;

    expect(p1).toBe(p2);

  });

  it('Demonstrating equals() matcher', () => {

/* Main difference between toBe and toEqual is with respect to objects
toBe matches only if the actual and the expected value are 
the very same object
toEqual matches if the two objects compared have identical values for 
their properties, even if they are different objects */

    console.log("Running the equals matcher spec");

    // p1 and p2 are two completely different objects with 
    // identical values for their properties
    let p1: Person = new Person('Superman',33,true);
    let p2: Person = new Person('Superman',33,true);

    // Remove the .not. to see a failure in the spec
    expect(p1).not.toBe(p2);

    expect(p1).toEqual(p2);
  });


  it('Demonstrating toContain()', () => {

    console.log("Running the toContain matcher spec");

    let animals = ['cat','dog','mouse'];

    expect(animals).toContain('dog');
    expect('Superman').toContain('man');
  });


  it('Demonstrating toBeDefined() and toBeUndefined()', () => {

    console.log("Running the toBeDefined and toBeUndefined matcher spec");

    let p1 : Person = new Person("peter", 30, false);
    let p2;

    expect(p1).toBeDefined();
    expect(p2).toBeUndefined();
  });

  it('Demonstrating toBeTrue() and toBeFalse()', () => {

    console.log("Running the toBeTrue and toBeFalse matcher spec");

    let p1 : Person = new Person("peter", 30, false);

    expect(30 > 10).toBeTrue();
    expect(p1.name === "dog").toBeFalse();
    expect(p1.isMarried).toBeFalse();

  });

  it('Demonstrating toBeGreaterThan() and toBeLessThan()', () => {

    console.log("Running the toBeGreaterThan and toBeLessThan matcher spec");

    let p1 : Person = new Person("peter", 30, false);

    expect(p1.age).toBeGreaterThan(10);
    expect(30 + 10).toBeLessThan(60);

  });


});
