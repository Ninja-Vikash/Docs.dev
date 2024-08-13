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

console.log(typeof myString)
console.log(myStringValue)
console.log(typeof myStringValue)

console.log(`Hello${myStringValue}World`)

// String conversion
// 2 => "2"
// null => "null"
// undefined => "undefined"
// true => "true" ; false => "false"
