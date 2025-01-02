"use strict";
// There are 3 primitive types in TypeScript: number, string, and boolean
let myNumber = 3;
let myString = "Docs.dev";
let myBoolean = true;
// myNumber = function(){}
// We can assign type of any variable:
// 1. Explicitly
// 2. Implicitly
// impicit
let newVariable = 3;
newVariable = Number(false);
console.log(newVariable);
// explicit
// let username: number;
// -------------------------------------------
let username = "vikash";
let userAge = 21;
let isLoggedIn = true;
// there are few special types
let value = true;
value = 1;
value = "vikash";
let customer;
customer = "vikash";
customer = true;
customer = 134;
let channel; // This variable can never have a value assigned to it.
