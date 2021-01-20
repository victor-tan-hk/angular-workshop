
class Human {

    // access modifier public by default
    name: string;
    protected isMarried: boolean;
    private age: number;

    constructor(title:string) {
        this.name = title;
        this.age = 40;
        this.isMarried = false;
    }

    talk() {
        return 'My name is ' + this.name;
    }
}

class Student extends Human {
    static university = 'UTAR';
    cgpa: number;

    constructor(title:string, cgpa:number) {
        // must call constructor of base class
        super(title);
        this.cgpa = cgpa;
    }
    // this overrides the original method 
    // from the parent class
    talk() {
        return 'I have got an awesome CGPA of ' + this.cgpa;
    }
    
    laugh() {
        // can also access methods inherited from 
        // parent class
        console.log(super.talk());
        // can access protected in child class
        console.log(this.isMarried);

        // cannot access private in child class
        //console.log(this.age);
        console.log('hahahaha');
    }
}


let peter = new Human('Peter');
console.log(peter.name);

// can't do this, its private
//console.log(peter.age);

console.log(peter.talk());

let james = new Student('James', 3.4);
console.log (james.talk());
james.laugh();

// Static properties are accessed directly
console.log(Student.university);

