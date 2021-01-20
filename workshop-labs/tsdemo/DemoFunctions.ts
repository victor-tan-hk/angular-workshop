// Named function
function add(x : number, y : number) : number {
    return x + y;
}

//Writing full function type for anonymous function
let myAdd: (x: number, y: number) => number =
    function(x: number, y: number): number { return x + y; };

// Simpler version with type inference 
let myAdd2 = function(x, y) { return x + y; };
console.log(myAdd2(3,5));

function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}

// error, too few parameters
//let result1 = buildName("Bob");                
// error, too many parameters
//let result2 = buildName("Bob", "Adams", "Sr.");  
// correct number of parameters
let result3 = buildName("Bob", "Adams");         

// optional parameters

function concatName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

// optionally leave one parameter out
let result4 = concatName("Bob");                  
// correct number of parameters
let result5 = concatName("Bob", "Adams");         

//default-initialized parameters
function createName(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

// works correctly now, returns "Bob Smith"
let result7 = createName("Bob");                 
// still works, also returns "Bob Smith" 
let result8 = createName("Bob", undefined);     

// Rest parameters

function makeName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let employeeName = makeName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);


