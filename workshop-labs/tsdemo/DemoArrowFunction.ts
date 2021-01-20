
// Regular function declaration
function funcName(params: number) {
    return params + 2;
}
funcName(2);

// arrow function with a single parameter

let myFuncName1 = (params) => { return params + 2 };
myFuncName1(2);

// shorter form that implies return statement

let myFuncName2 = (params) => params + 2;

// parenthesis optional with only one single parameter

let myFuncName3 = params => params + 2;

// for more than one parameter, parenthesis is necessary

let myFuncName4 = (x,y,z) => x + y + z;

// arrow function with no parameters

let myFuncName5 = () => console.log('a');

// samples of using arrow functions

const smartPhones = [
    { name:'iphone', price:649 },
    { name:'Galaxy S6', price:576 },
    { name:'Galaxy Note 5', price:489 }
  ];

const prices = smartPhones.map(smartPhone => smartPhone.price);
console.log(prices); 

const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const divThree = arrayNum.filter(v => v % 3 === 0);
console.log(divThree);

// demo concept of this and arrow functions

// this is bound to the global object Window where setTimeout belongs to
// and NOT firstObj 
let firstObj = {
    id: 100,
    counter: function() {
      setTimeout(function() {
        console.log(this);
        console.log(this.id);
      }, 1000);
    }
  };


//firstObj.counter();


// we now bind the function inside setTimeout
// to secondObj 

let secondObj = {
    id: 200,
    counter: function() {
      setTimeout(function() {
        console.log(this);
        console.log(this.id);
      }.bind(secondObj), 1000);
    }
  };

//secondObj.counter();

// Arrow function will cause this to lexically go up a scope
// accomplishing the same effect

let thirdObj = {
    id: 300,
    counter: function() {
      setTimeout(() => {
        console.log(this);
        console.log(this.id);
      }, 1000);
    }
  };

//thirdObj.counter();

