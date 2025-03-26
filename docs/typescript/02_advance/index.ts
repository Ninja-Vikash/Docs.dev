class Person {
    constructor(public name: string){}
}

class Employee extends Person {
    constructor(name: string, public uid: string, public salary: number){
        super(name)
    }

    alotSalary(){
        return this.salary + (this.salary * 10/100)
    }
}

const e1 = new Employee("Vikash", "A2D", 1220)

e1.alotSalary()

console.log(e1)