
// boolean type
let isDone: boolean = false;

// number type
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// string type
let color: string = "blue";

// automatic type inference
let thing = 'pencil';
// can no longer assign any other type
//thing = 45;



// any type, emulates the equivalent of dynamic typing in vanilla JS
let notSure: any = 4;
notSure = "maybe a string instead";
console.log('My type is ' + typeof notSure);
notSure = false;
console.log('My type is ' + typeof notSure);

// void
let dontuseme: void = undefined;
dontuseme = null;
// cannot assign any other values
//dontuseme = 'donkey';

function warnUser(): void {
    console.log("This is my warning message");
}

let uvar: undefined = undefined;
let nvar: null = null;
// cannot assign any other values
//nvar = 15;
//uvar = 'asdf';

// template strings
let fullName: string = `Superman`;
let speed:number = 100;
let sentence: string = `My name is ${ fullName }.

I run at ${ speed * 2 } miles per hour.`;
console.log(sentence)

// normal array declaration
let ages: number[] = [30, 40, 50];

// generic array declaration
let ages2: Array<number> = [30, 40, 50];

// using any for array of mixed types
let mylist: any[] = [1, true, "free"];
mylist[1] = 'cool';
mylist[2] = 35;


