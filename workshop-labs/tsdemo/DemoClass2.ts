
class Vehicle {

    private _maxSpeed: number;

    // accessor getter
    get maxSpeed(): number {
        return this._maxSpeed;
    }

    // accessor setter
    set maxSpeed(newSpeed: number) {
        if (newSpeed > 0 && newSpeed < 150)
            this._maxSpeed = newSpeed;
        else
            console.log("Invalid speed");
    }


    // Parameter properties
    // shortcut for declaring and 
    // assigning properties in one location
    constructor(public name:string, private isLocal: boolean) {

    }

}

let car = new Vehicle("mazda",false);
console.log(car.name);

car.maxSpeed = 30;
// results in error
car.maxSpeed = 5000;

