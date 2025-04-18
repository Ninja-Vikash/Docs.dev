class Person {
    constructor(public name: string) {}
}

class Employee extends Person {
    constructor(name: string, public uid: string, public salary: number) {
        super(name);
    }

    alotSalary() {
        return this.salary + (this.salary * 10) / 100;
    }
}

const e1 = new Employee("Vikash", "A2D", 1220);

e1.alotSalary();

// console.log(e1)

// GETTER AND SETTER

class Marks {
    constructor(public math: number, public passingMarks: number) {}

    get isPassed() {
        if (this.math >= this.passingMarks) return "Passed!";
        return "Failed";
    }

    get requiredMarks(){
        return this.passingMarks - this.math
    }

    set addMarks(additional: number) {
        this.math += additional
    }
}

const s1 = new Marks(32, 33);

// Checks for student passed or not
console.log(s1.isPassed)

// Checks for how much marks is required to pass
console.log(s1.requiredMarks)

// Adds the require marks
s1.addMarks = 1

// Final check for passed student
console.log(s1.isPassed)
