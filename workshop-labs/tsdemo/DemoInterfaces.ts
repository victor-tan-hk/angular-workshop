

interface RecordValue {
    category: string;
    cost: number;
}

// defining a variable using an interface
let firstRecord: RecordValue = {
    category : 'slow',
    cost: 2000
}
 
// defining a parameter using an interface
function printRecord(recordObj: RecordValue) {
    console.log(recordObj.category);
    console.log(recordObj.cost);
}

let wrongRecord = {
    cost : 30, 
}

// Won't work
//printRecord (wrongRecord);


let myRecord = {
    cost : 10, 
    category: "fast",
    isBlue: false,
};

printRecord (myRecord);


//Demo optional properties

interface OfficeWorker {
    name: string;
    isMarried?: boolean;
    age?: number;
}

function processWorker(worker: OfficeWorker) : string {
    let status = `${worker.name} is unmarried`
    if (worker.isMarried) {
        if (worker.age) 
            status = `${worker.name} married at ${worker.age}`
        else
            status = `${worker.name} is married`
    }
    return status;
}

console.log(processWorker({name: "peter"}));

console.log(processWorker(
    {name: "james",
     isMarried: true
    })
);

console.log(processWorker(
    {name: "susan",
     isMarried: true,
     age : 30
    })
);

// Demo excess property checks
/*
console.log(processWorker(
    {name: "mary",
     issMarried: true
    })
);
*/

// Using interface for function types
interface SearchFunc {
    (a: string, b: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}

// Demo interface with classes

interface Behaviour {
    age : number;
    talk(words: String);
}

class Dog implements Behaviour {
    age : number;
    talk(words: String) {
        console.log (words);
    }
    constructor(age:number) {
        this.age = age;
    }
}

let myDog = new Dog(23);
myDog.talk("bow wow");

