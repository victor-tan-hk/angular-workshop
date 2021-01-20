

let sum = 0;
let myNames = ['peter','james','anne','melissa'];
for (let i = 0; i < myNames.length; i++) {
    sum += myNames[i].length;
}

console.log("sum of the length of all the strings is : " + sum);