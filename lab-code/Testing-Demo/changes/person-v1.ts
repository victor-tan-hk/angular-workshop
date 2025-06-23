export class Person {

    // properties / fields of the class
    name: string;
    age: number;
    isMarried: boolean;

    // constructor initializes the properties
    constructor(name: string, age: number, isMarried: boolean) {
        this.name = name;
        this.age = age;
        this.isMarried = isMarried;
    }

    getPersonDetails(): string {
        let maritalStatus: string;
        if (this.isMarried)
            maritalStatus = "is married";
        else
            maritalStatus = "is single";

        return `${this.name} is ${this.age} years old and ${maritalStatus}`;
    }

    increaseAge(amount: number): void {
        this.age += amount;
    }

}