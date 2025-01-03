"use strict";
// Array declaration
let arr = [1, 2, 3, 4, null];
arr.push(7);
let numArr = [1, 2, 3, 4, 5];
numArr.push(78); // ✅
// numArr.push("John")  // Error: ❎
let strArr = ["vikash", "ninja", "docs"];
// strArr.push(90)     // Error: ❎
let boolArr = [true, false, true, false];
// "readonly" keyword is used to make the array immutable.
let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];
// months.push("Jan")  // Error: ❎
let newArr = [1, 2, 3, 4, true];
newArr.push(false);
const days = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
];
let data;
data = 90;
data = "TypeScript";
// data = true
