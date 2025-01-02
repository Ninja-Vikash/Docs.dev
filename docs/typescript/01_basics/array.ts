// Array declaration

let numArr: number[] = [1, 2, 3, 4, 5];

numArr.push(78); // ✅

// numArr.push("John")  // Error: ❎

let strArr: string[] = ["vikash", "ninja", "docs"];

// strArr.push(90)     // Error: ❎

let boolArr: boolean[] = [true, false, true, false];

// "readonly" keyword is used to make the array immutable.

let months: readonly string[] = [
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
