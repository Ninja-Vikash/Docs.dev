// String

let myName: string
myName = "vikash"
// console.log(myName)

// Number

let myAge: number = 21
// console.log(myAge)
// myAge = "twenty one"

// Boolean

let isMarried: boolean = false
// console.log(isMarried)
// isMarried = "No"

// Any

let isProgrammer: any;
isProgrammer = true
isProgrammer = "Yes"
// console.log(typeof isProgrammer)


/**
 *  Arrays in TypeScript
 */

let myArr = [1, 2]
myArr.push(3)
// myArr.push("4")  // Error

let myArr2: number[] = [1, 2, 3, Number("21")]
// myArr2.push('21') // Error

let myArr3: (number | string)[] = [1, 2, "3"]
myArr3.push("4") // Will work

let roles: readonly string[] = ["admin", "user", "super-admin"]

// roles.push("new") // Error
// roles.pop() // Error

/**
 *  Functions in TypeScript
 */
// basic functions

// function addOne (num: number): number {
//     return num + 1
// }

// console.log(addOne(2))

// function greet (name: string): void{
//     console.log(`Hello ${name}`)
// }

// greet("Vikash")

// Arrow functions

const addOne = (num: number): number => num + 1;

console.log(addOne(2))

const greet = (name: string): void => console.log(`Hello ${name}`)

greet("Vika")
