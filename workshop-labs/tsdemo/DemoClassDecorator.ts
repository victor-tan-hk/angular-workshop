function log(prefix?: string) {
    return (target) => {
      // save a reference to the original constructor
      let original = target;
  
      // a utility function to generate instances of a class
      function construct(constructor, args) {
        let c: any = function () {
          return constructor.apply(this, args);
        }
        c.prototype = constructor.prototype;
        return new c();
      }
  
      // the new constructor behavior
      let f: any = function (...args) {
        console.log(prefix + original.name);
        return construct(original, args);
      }
  
      // copy prototype so instanceof operator still works
      f.prototype = original.prototype;
  
      // return new constructor (will override original)
      return f;
    };
  }
  
  @log('wonderful ')
  class World {

    constructor() {
        console.log("I love this world");
    }
  }

 @log('awesome ')  
 class Universe {

 } 

 const w = new World(); 
 const u = new Universe();