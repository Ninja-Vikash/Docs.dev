// let score = "21"
// let score = "21yxz"
// let score = null
// let score = undefined
// let score = false
// let score = {}
let score = []

// console.log(typeof score)

let scoreInNumber = Number(score)

// console.log(scoreInNumber)
// console.log(typeof scoreInNumber)

// Number conversion
// "21" => 21
// "21xyz" => NaN
// null => 0
// undefined => NaN
// true => 1 ; false => 0
// {} => NaN ; [] => 0

// *******************************************************

// let isLoggedIn = true
// let isLoggedIn = ""
// let isLoggedIn = "vikash"
// let isLoggedIn = 1
// let isLoggedIn = 0
// let isLoggedIn = null
// let isLoggedIn = {}
// let isLoggedIn = []
// let isLoggedIn = function(){}
let isLoggedIn = undefined

// console.log(typeof isLoggedIn)

let valueInBoolean = Boolean(isLoggedIn)

// console.log(valueInBoolean)
// console.log(typeof valueInBoolean)

// Boolean conversion
// "" => false
// "vikash" => true
// 1 => true
// 0 => false
// null => false
// {} => true ; [] => true
// function(){} => true
// undefined => false

// **************************************************

// let myString = 2
// let myString = null
// let myString = undefined
// let myString = true
// let myString = {}
let myString = []

let myStringValue = String(myString)

// console.log(typeof myString)
// console.log(myStringValue)
// console.log(typeof myStringValue)

// console.log(`Hello${myStringValue}World`)

// String conversion
// 2 => "2"
// null => "null"
// undefined => "undefined"
// true => "true" ; false => "false"

// *************************** OPERATIONS *****************************

let value = 3

let negValue = -value

// console.log(negValue)

// console.log( 2 + 2 )
// console.log( 2 - 2 )
// console.log( 2 * 2 )
// console.log( 2 ** 2 )
// console.log( 2 / 2 )
// console.log( 2 % 2 )

let str1 = "hello"
let str2 = " vikash"

let str3 = str1 + str2

// NOTE: str1 - str2 not possible 😅

// console.log(str3)

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + "2")

console.log(1 + "2" + 2)            // 122
console.log(1 + 2 + "2")            // 32

console.log(3 + 4 * 5 % 3)   // is not comes under good practice
// (3 + 4 * 5 % 3) => (3 + 20 % 3) => (3 + 2) => 5
// result may un-predictable

console.log((3 + (4 * 5)) % 3)   // instead of you can write in this way and this is more better approach, for the predictable result

console.log(+true)      // Prefer not to use
console.log(+"")        // Prefer not to use

let num1, num2, num3

num1 = num2 = num3 = 4  // bad practice 


// Understand the difference between postfix and prefix operators
    let gameCounter = 10
                            // Value to use | value to pass
console.log(++gameCounter)  // 11   | 11
console.log(gameCounter)    // 11   | 11
console.log(gameCounter++)  // 11   | 12
console.log(gameCounter)    // 12   | 12
console.log(gameCounter--)  // 12   | 11
console.log(++gameCounter)  // 12   | 12
console.log(gameCounter)    // 12   | 12