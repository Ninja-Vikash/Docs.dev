// Stack Memory

/**
 *  NOTE:
 *  All primitive data types stored as stack memory
 *
 *  These are call by value type,
 *  Meaning when we call the value we get an copy of original value and if made changes over it, not reflects on original
 */

let myAge = 21;

let myAgeValue = myAge;
myAgeValue = 20;

// console.log(myAgeValue)
// console.log(myAge)

let myName = "vikash";

myName = 124;
// console.log(myName)

// Heap Memory

/**
 *  NOTE:
 *  All objects are stored in heap memory
 *
 *  That is call by reference.
 *  Meaning if we made any changes in copy  it reflects on original
 */

// const carObject = {
//   name: "BMW",
//   model: "A3",
//   modelNumber: 312,
// };

// const myObject = carObject;

// console.log(carObject);

// myObject.name = "Audi"

// console.log(carObject)

let myArr = ["Hey", "I am", "vikash"];

// console.log(myArr)

let newArr = myArr;

newArr[0] = "Ahat";

// console.log(myArr)

// Object constructor function

// function carObject(name, model) {
//   this.name = name;
//   this.model = model;
// }

// const BMW = new carObject("BMW", "C4");
// const AUDI = new carObject("AUDI", "X87");

// console.log(AUDI)

// class Mobile {
//   constructor(name, model, price, discount) {
//     this.name = name;
//     this.model = model;
//     this.price = price;
//     this.discount = discount;
//   }

//   getAmount() {
//     return this.amountCalculate();
//   }

//   amountCalculate() {
//     const pay = this.price - (this.price * this.discount) / 100;
//     console.log(`Congratulation! Net Payable Amount : ${pay}`);
//   }
// }

// const SAMSUNG = new Mobile("SAMSUNG", "A10s", 45450);

// SAMSUNG.getAmount()

// const Oppo = new Mobile("OPPO", "X56", 11, 19999)

// Oppo.getAmount()

// ----------------------------------------------------------

// function Math(num1, num2) {
//   function Add() {
//     return num1 + num2;
//   }
//   function Sub() {
//     return num1 - num2;
//   }
//   function Mul() {
//     return num1 * num2;
//   }
//   function Div() {
//     return num1 / num2;
//   }
//   return { Add, Sub, Mul, Div };
// }

// const value = Math(10, 2);

// const { Add, Sub, Mul, Div } = value;

// console.log(Add());
// console.log(Sub());
// console.log(Mul());
// console.log(Div());

// class Math {
//   constructor(num1, num2) {
//     this.num1 = num1;
//     this.num2 = num2;
//   }

//   Add = () => this.num1 + this.num2;
//   Sub = () => this.num1 - this.num2;
//   Mul = () => this.num1 * this.num2;
//   Div = () => this.num1 / this.num2
// }

// const value = new Math(20,4)

// console.log(value.Add())
// console.log(value.Sub())
// console.log(value.Mul())
// console.log(value.Div())

// function Mobile(name, model, price, discount) {
//   this.name = name;
//   this.model = model;
//   this.price = price;
//   this.discount = discount;

//   this.amount = `NET PAYABLE : ${
//     this.price - (this.price * this.discount) / 100
//   }`;

//   const DETAIL = {
//     name: this.name,
//     model: this.model,
//     price: this.price,
//     discount: this.discount,
//     amount: this.amount,
//   };
//   return { DETAIL };
// }

// const SAMSUNG = new Mobile("SAMSUNG", "A10s", 10000, 2.3);

// const OPPO = new Mobile("OPPO", "D34", 21000, 100);

// console.log(OPPO.DETAIL);

function cart(name, price) {
  this.name = name;
  this.price = price;
}

const sofa = new cart("SOFA", 2500);

// class cart {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
// }

// const studyTable = new cart("STUDY TABLE", 3400);

class Mobile {
  constructor(name, model, price, discount) {
    this.name = name;
    this.model = model;
    this.price = price;
    this.discount = discount;
  }

  DETAIL() {
    const DATA = {
      name: this.name,
      model: this.model,
      price: this.price,
      discount: this.discount,
      amount: `NET PAYABLE : ${
        this.price - (this.price * this.discount) / 100
      }`,
    };
    return DATA;
  }
}

const SAMSUNG = new Mobile("SAMSUNG", "A10s", 10000, 2.3);

console.log(SAMSUNG.DETAIL());
