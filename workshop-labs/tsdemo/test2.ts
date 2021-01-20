
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