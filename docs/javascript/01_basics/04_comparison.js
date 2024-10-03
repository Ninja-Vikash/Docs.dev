console.log(2 > 4)
console.log(2 >= 4)
console.log(2 < 4)
console.log(2 <= 4)
console.log(2 == 4)
console.log(2 != 4)

// NOTE: comparison operators return a boolean value.
// Most of the logic based on comparison.
// In if-else, loops

    console.log("2" > 1)
    console.log("02" > 2)

// Makesure You are comparing similar data type variable so that your result may not be unexpected.

console.log(null > 0)       // false
console.log(null == 0)      // false
console.log(null >= 0)      // true

// The reason is that an equality check == and comparisons > , < , >= , <= work differently

// Comparisons convert null to a number, treating it as 0 that's why
// null >= 0 is true
// null > 0 is false

console.log(undefined == 0)     // false
console.log(undefined > 0)      // false
console.log(undefined < 0)      // false

// strict checking

console.log("2" === 2)
