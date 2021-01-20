
function canBeAnything<T> (firstArg: T, secondArg: number) : T {
    console.log (`its ${firstArg} and ${secondArg}`);
    return firstArg;
}

let result1:string = canBeAnything<string>('cat',3);
let result2:boolean = canBeAnything(false,3); // inference

function useArrays<T> (firstArray: T[]) {
    for (let i =0; i < firstArray.length; i++) {
        console.log (`${i} : ${firstArray[i]}`);
    }
}

let numArray = [3, 5, 7];
useArrays(numArray);
let stringArray = ['cat','dog','mouse'];
useArrays(stringArray);

// Generic classes

class GenericClass<T> {
    someValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericClass<number>();
myGenericNumber.someValue = 10;
myGenericNumber.add = function(x, y) { 
    return this.someValue + x + y; 
};

console.log(myGenericNumber.add(4,5));


let myGenericString = new GenericClass<string>();
myGenericString.someValue = 'cat';
myGenericString.add = function(x, y) { 
    return `${this.someValue} likes ${x} and ${y}`; 
};

console.log(myGenericString.add('tuna','salmon'));


// Generic constraints

interface People {
    name: string
}
 
interface Family {
    name: string,
    age: number,
    relation: string
}
 
interface Celebrity extends People {
    profession: string
}

interface ThisWontWork {
    isItWorking: boolean,    
} 

function printName<T extends People>(theInput: T): void {
    console.log(`My name is ${theInput.name}`);
}
 
let serena: Celebrity = {
    name: 'Serena Williams',
    profession: 'Tennis Player'
}

let thor: Family = {
    name: 'Thor',
    age: 3000,
    relation: 'Lightning God'
}

let wontWork: ThisWontWork = {
    isItWorking: false,
} 
 
printName(serena);
printName(thor);
// incorrect type for the type variable
//printName(wontWork);