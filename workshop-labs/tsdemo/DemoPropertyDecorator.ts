function WhoIReallyAm(label: string) {
    return function (target: any, key: string) {
      Object.defineProperty(target, key, { 
        configurable: false,
        get: () => `awesome ${key} which should be ${label}`,
      });
    }
  }
  
  class Test {
    @WhoIReallyAm('ironman')      
    name: string = 'thanos';
    occupation: string = 'galaxy destroyer';
  }
  
  let t = new Test();
  console.log(t.name);  
  console.log(t.occupation);    